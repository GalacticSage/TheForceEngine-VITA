file(GLOB_RECURSE SOURCES "*.cpp" "*.c")

if(TFE_VITA)
    # AngelScript's native ARM calling convention must not use fast-math.
    set_property(
        SOURCE ${SOURCES}
        APPEND PROPERTY COMPILE_OPTIONS "-fno-fast-math"
    )

    # Use AngelScript's ARM GCC implementation.
    list(APPEND SOURCES
        "${CMAKE_CURRENT_SOURCE_DIR}/Angelscript/angelscript/source/as_callfunc_arm_gcc.S"
    )

    set_property(
        SOURCE "${CMAKE_CURRENT_SOURCE_DIR}/Angelscript/angelscript/source/as_callfunc_arm_gcc.S"
        APPEND PROPERTY COMPILE_FLAGS " -Wa,-mimplicit-it=always"
    )

else()

    set(ARCHFLAGS "${CMAKE_SYSTEM_PROCESSOR}")

    if(APPLE AND NOT IOS)
        if("${CMAKE_SYSTEM_PROCESSOR}" MATCHES "arm")
            set(ARCHFLAGS "aarch64")
        endif()
    endif()

    if("${ARCHFLAGS}" MATCHES "^arm")
        if(CMAKE_ASM_COMPILER_WORKS)
            list(APPEND SOURCES
                "${CMAKE_CURRENT_SOURCE_DIR}/Angelscript/angelscript/source/as_callfunc_arm_gcc.S"
            )

            set_property(
                SOURCE "${CMAKE_CURRENT_SOURCE_DIR}/Angelscript/angelscript/source/as_callfunc_arm_gcc.S"
                APPEND PROPERTY COMPILE_FLAGS " -Wa,-mimplicit-it=always"
            )
        else()
            message(FATAL_ERROR "ARM target requires a working assembler")
        endif()
    endif()

    if("${ARCHFLAGS}" MATCHES "^aarch64")
        if(CMAKE_ASM_COMPILER_WORKS)
            if(NOT APPLE)
                list(APPEND SOURCES
                    "${CMAKE_CURRENT_SOURCE_DIR}/Angelscript/angelscript/source/as_callfunc_arm64_gcc.S"
                )
            else()
                list(APPEND SOURCES
                    "${CMAKE_CURRENT_SOURCE_DIR}/Angelscript/angelscript/source/as_callfunc_arm64_xcode.S"
                )
            endif()
        else()
            message(FATAL_ERROR "ARM target requires a working assembler")
        endif()
    endif()

endif()

target_sources(tfe PRIVATE ${SOURCES})
