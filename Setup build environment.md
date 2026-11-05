# Setup build environment

Create directory for the build environment & enter it

```shellscript
mkdir TFE-VITA
cd TFE-VITA
```

#### Installing VITASDK

[Vita SDK](https://affine.senoner.space/workspace/9cad22ef-5772-4844-91a2-32a490adc4f9/OEohzA0kHc)

Set the environment variable VITASDK to be the install destination for Vita SDK. We recommend using /usr/local/vitasdk. We also recommend making the change to your .bashrc or equivalent (.bash\_profile on OSX) since using the toolchain requires VITASDK to be set.

```shellscript
export VITASDK=/usr/local/vitasdk
export PATH=$VITASDK/bin:$PATH # add vitasdk tool to $PATH
```

Download the host package manager and bootstrap VitaSDK. The bootstrap installs the newest supported release — currently 2026.08 — and selects its channel:

```shellscript
git clone https://github.com/vitasdk/vdpm
cd vdpm
./bootstrap-vitasdk.sh
```

Check what you got:

```shellscript
vdpm status
```

To install packages and libraries, dependencies are resolved automatically:

```shellscript
vdpm install zlib sdl2 libvita2d taihen sdl2_image libmathneon SceShaccCgExt vitaShaRK
```

#### Install and compile VitaGL

[vitaGL: openGL wrapper for PSVITA.](https://affine.senoner.space/workspace/9cad22ef-5772-4844-91a2-32a490adc4f9/K3nRNw2FJ4)

```shellscript
git clone https://github.com/Rinnegatamante/vitaGL
cd vitaGL
make NO_SPLASHSCREEN=1 HAVE_SHARK_LOG=1 DEBUG_GLSL_TRANSLATOR=1 DEBUG_GLSL_PREPROCESSOR=1 LOG_ERRORS=1 -j2
sudo -E make install NO_SPLASHSCREEN=1 HAVE_SHARK_LOG=1 DEBUG_GLSL_TRANSLATOR=1 DEBUG_GLSL_PREPROCESSOR=1 LOG_ERRORS=1 -j2
```

> \[!undefined]
>
> **Note:&#x20;**`sudo -E` preserves your `VITASDK` environment variable. Without it, `make install` writes to `/arm-vita-eabi/` at the filesystem root instead of the SDK.

**Verify the install landed in the right place:**

```shellscript
ls $VITASDK/arm-vita-eabi/include/vitaGL.h
ls $VITASDK/arm-vita-eabi/lib/libvitaGL.a
```

#### Install and compile SDL-vitagl

[SDL-vitagl: Simple Directmedia Layer](https://affine.senoner.space/workspace/9cad22ef-5772-4844-91a2-32a490adc4f9/wzP9d8K607)

```shellscript
git clone --depth 1 --branch vitagl https://github.com/Northfear/SDL.git SDL-vitagl
cd SDL-vitagl
cmake -S . -B build-vita \
  -DCMAKE_TOOLCHAIN_FILE="$VITASDK/share/vita.toolchain.cmake" \
  -DCMAKE_BUILD_TYPE=Release \
  -DVIDEO_VITA_VGL=ON \
  -DSDL_SHARED=OFF \
  -DSDL_STATIC=ON \
  -DCMAKE_POLICY_VERSION_MINIMUM=3.5
cmake --build build-vita -j"$(nproc)"
sudo cmake --install build-vita
```



> \[!undefined]
>
> **IMPORTANT:** Before building, check the CMake options summary printed above. This line must read `ON` on the right-hand side:
>
> > `-- VIDEO_VITA_VGL (Wanted: ON): ON`
>
> If it says `OFF`, vitaGL was not found, go back and fix the vitaGL install before continuing. The build will otherwise succeed but produce an SDL without OpenGL support, failing at runtime with "Cannot initialize GPU/Window".

#### Git clone the TFE-VITA repo

```shellscript
git clone https://github.com/GalacticSage/TheForceEngine-VITA.git
```
