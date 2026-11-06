# The Force Engine (TFE)
* [Website](https://theforceengine.github.io/)
* [Release Downloads](https://theforceengine.github.io/downloads.html)
* [Forums](https://the-force-engine.freeforums.net/)
* [Discord](https://discord.gg/hpsJnY9)
* [Project Structure](ProjectStructure.md)

## About
“The Force Engine” is a project with the goal to reverse engineer and rebuild the “Jedi Engine” for modern systems and the games that used that engine, like “STAR WARS™: Dark Forces” and “Outlaws”. The project will include modern, built‑in tools, such as a level editor and will make it easy to play “STAR WARS™: Dark Forces” and “Outlaws” on modern systems as well as the many community mods designed to work with the original games.

Playing “STAR WARS™: Dark Forces” or, in the future, “Outlaws” using “The Force Engine” adds ease of use and modern features, such as higher resolutions and modern control schemes, such as mouselook. Using the built‑in tools, once they are available, will enable easier modding with more modern UI, greater flexibility, and the option to use enhancements made to the “Jedi Engine for “Outlaws” in custom “STAR WARS™: Dark Forces” levels, such as slopes, stacked sectors, per‑sector color palettes and more.

“STAR WARS™: Dark Forces” support is complete, but “Outlaws” is not playable yet. The focus so far has been on the framework, “STAR WARS™: Dark Forces” support, and “Jedi Engine” reverse‑engineering. However, “Outlaws” support is planned and will be complete in TFE version 2.0. See [Current State](#current-state) below.

**A purchased copy of the original game is required and is not provided by “The Force Engine”.** The [documentation](https://theforceengine.github.io/Documentation.html) has some information on how to legally purchase “STAR WARS™: Dark Forces”. TFE is **not** a remaster, it is essentially a source port designed to run the *original* game natively on modern systems with quality of life improvements and optional enhancements. “STAR WARS™: Dark Forces” and “Outlaws” are owned by Disney and are still active, commercial products. The IP is owned solely by Disney.

**Linux is supported but may require additional setup.** You may need to compile TFE from source in order to run it directly on your favorite Linux distro. For most Linux users, it is recommended to install and run [TFE via Flatpak from Flathub](https://flathub.org/apps/io.github.theforceengine.tfe) on those Linux systems where Flatpak is available. Search your distro’s software center or app portal; if you are already using [GNOME Software](https://apps.gnome.org/de/Software "Software") or KDE’s [Discover](https://apps.kde.org/discover "Discover") (like on the “[Steam Deck](#steamdeck)”) then installing TFE may be just one click away from you. See the [Linux](#linux) section below.

In addition, a [Snap](https://snapcraft.io) package is planned for the future, alleviating the need to manually compile the project on systems employing Snap. If you don’t want to compile the code, it might be better to use Windows for now or use Proton on the “Steam Deck”.

### Steam Deck
On this system it is recommended to run “The Force Engine” in desktop mode and installing it via KDE’s Discover (from Flathub).

## Current Features
* Full “STAR WARS™: Dark Forces” support, including mods. “Outlaws” support is coming in version 2.0.
* Mod Loader — simply place your mods in the `Mods` directory as zip files or directories.
* High resolution and widescreen support — when using 320×200 you get the original software renderer. TFE also includes a floating‑point software renderer which supports widescreen, including ultrawide, and much higher resolutions.
* GPU renderer with perspective correct pitch — play at much higher resolutions with improved performance.
* Extended Limits — TFE, by default, will support much higher limits than the original game’s “Jedi Engine” was capable of, which removes most of the HOM (Hall of Mirrors) issues in advanced mods.
* Full input binding, mouse sensitivity adjustment, and controller support. Note however that menus currently **require a pointing input device, like a mouse or touchscreen**.
* Optional quality‑of‑life improvements, such as full mouselook, aiming reticle, improved Boba Fett AI, autorun, and more.
* A new save system that works seamlessly with the exiting checkpoint and lives system. You can ignore it entirely, use it just as an exit save so you don’t have to play long user levels in one sitting, or full save and load with quicksaves like “Doom” or “Duke Nukem 3D”.
* Sound Font (sf2) and OPL3 emulation support.
* Optional and quality‑of‑life features, even mouselook, can be disabled if you want the original experience. Play in 320×200, turn the mouse mode (input menu) to menus only or horizontal, and enable the classic (software) renderer — and it will look and play just like DOS but at a higher frame rate and no need to adjust cycles in “DosBox”.

## Current State
Full support for “STAR WARS™: Dark Forces” has been completed. You can play through the entire game, with all AI, weapons, items, and functionality working as expected. While the project shares a legacy with DarkXL, it is a complete rewrite, rebuilt from the ground up with a much greater focus on accuracy. It is much more focused than the “XL Engine”, focused on being a “Jedi Engine” replacement/port only. Thus, full support for “STAR WARS™: Dark Forces” and later “Outlaws”. Please, check the [Roadmap](Roadmap.md) for more information.

## Current Release
The current release only supports “STAR WARS™: Dark Forces”. All weapons, AI, items, and all other systems work, including [iMUSE](https://en.wikipedia.org/wiki/IMUSE). You can play through “STAR WARS™: Dark Forces” from the beginning to the end and even play “STAR WARS™: Dark Forces” mods. As with any project of this nature, there may be bugs and system specific issues. If you run into any bugs that cannot be reproduced in the DOS version, please post them on the [forums](https://the-force-engine.freeforums.net) or [GitHub](https://github.com/luciusDXL/TheForceEngine/issues).

## Minimum Requirements
* OpenGL 3.3
* Windows 7, 64 bit / modern Linux distro / macOS

Note that there are plans to lower the requirements for using the classic software renderer in the future. However, the minimum requirements for GPU rendering are here to stay. For now, only OpenGL is supported, which may limit the use of some older Intel integrated GPUs that would otherwise be capable. There are near term plans to add Direct3D 10/11, Vulkan, and maybe Metal render backends which should enable more GPUs to run the engine efficiently.

## Windows
The release package includes the Windows binary and all of the data (except for the original game) needed to run. If you want to compile TFE yourself, use the Visual Studio solution provided.

## Linux
### General Notes
Runtime data like savegames, configuration, mods, etc. are by default stored in `${HOME}/.local/share/TheForceEngine`.
This can be overridden by defining the `TFE_DATA_HOME` environment variable.

### Required Libraries
* [SDL2](http://libsdl.org) Version 2.24
* [SDL2-image](https://github.com/libsdl-org/SDL_image) Version 2.6.3
* OpenGL 3.3 capable driver (latest [Mesa 3D](https://www.mesa3d.org) or Nvidia proprietary driver recommended)

### Optional Libraries
* [RtMidi](https://www.music.mcgill.ca/~gary/rtmidi/) 5.0.0 or higher for external MIDI synthesizer support
* [Theora](hhttps://gitlab.xiph.org/xiph/theora/) v1.1.1 For Remastered Cutscene Support
* [OGG](https://gitlab.xiph.org/xiph/ogg) v1.3.5 For Remastered Cutscene Support
* [Vorbis](https://gitlab.xiph.org/xiph/vorbis) v1.3.7 For Remastered Cutscene Support

### Building from Source
#### Recommended Tools
* [CMake](https://cmake.org) 3.12 or higher to build the source.
* GCC 11 and newer or equivalent clang version.
#### How to build
* Unpack the source or fetch from GitHub
* Create a build directory and chdir into it:
  ```sh
  mkdir tfe-build
  cd tfe-build
  ```
* Run CMake in the build directory, the build type must be specified (debug or release):
  ```sh
  cmake -S /path/to/tfe-source
  ```
* Build it:
  ```sh
  make
  ```
* Install it:
  ```sh
  sudo make install
  ```
* If no additional parameters were added to CMake, files will be installed in `/usr/local/bin` and `/usr/local/share/TheForceEngine`

#### Running TFE
##### External application dependencies
* “[KDialog](https://develop.kde.org/docs/administration/kdialog "Shell scripting with KDE dialogs")” for file dialog on KDE Plasma Desktop Environment.
* “zenity” for file dialog on all other desktop environments.
* external MIDI is no longer required but still supported through the “System MIDI” device.

##### Launch
* Start the engine by clicking on the “The Force Engine” desktop icon or by running `theforceengine` in a shell.

## MacOS

Prerequisites available via Homebrew:

```bash
brew install cmake pkg-config sdl2 sdl2_image rtmidi
```

You also need Xcode Command Line Tools:
```bash
xcode-select --install
```

```bash
mkdir build && cd build
cmake ..
make
```
## PS-Vita
### Setup build environment

Create directory for the build environment & enter it

```shellscript
mkdir TFE-VITA
cd TFE-VITA
```

#### Installing VITASDK

[Vita SDK](https://vitasdk.org)

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
git clone https://github.com/GalacticSage/vitaGL
cd vitaGL
make NO_SPLASHSCREEN=1 HAVE_SHARK_LOG=1 DEBUG_GLSL_TRANSLATOR=1 DEBUG_GLSL_PREPROCESSOR=1 LOG_ERRORS=1 -j2
sudo -E make install NO_SPLASHSCREEN=1 HAVE_SHARK_LOG=1 DEBUG_GLSL_TRANSLATOR=1 DEBUG_GLSL_PREPROCESSOR=1 LOG_ERRORS=1 -j2
```

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

> **IMPORTANT:** Before building, check the CMake options summary printed above. This line must read `ON` on the right-hand side:
>
> > `-- VIDEO_VITA_VGL (Wanted: ON): ON`
>
> If it says `OFF`, vitaGL was not found, go back and fix the vitaGL install before continuing. The build will otherwise succeed but produce an SDL without OpenGL support, failing at runtime with "Cannot initialize GPU/Window".

###### Build the VPK

```shellscript
git clone https://github.com/GalacticSage/TheForceEngine-VITA.git
cd TheForceEngine-VITA
cmake -S . -B ../tfe-vita-optin-build -DTFE_VITA=ON \
  -DTFE_VITA_GAME_DATA_DIR="$HOME/TFE-VITA/TFE_Data" \
  -DCMAKE_BUILD_TYPE=Release -DCMAKE_POLICY_VERSION_MINIMUM=3.5
cmake --build ../tfe-vita-optin-build --target tfe_vpk -j"$(nproc)"
```
## Packaging
TFE comes with the build‑in “[AdjustableHud](TheForceEngine/Mods/TFE/AdjustableHud)” mod. Package maintainers may wish and are encouraged to package “AdjustableHud” into a separate *required* or *recommended* package.

By default TFE builds and installs with the “AdjustableHud” mod. If you do not want to install the “AdjustableHud” mod, for example when building separate packages, configure the CMake build with the `-DENABLE_ADJUSTABLEHUD_MOD=OFF` option. If you want to install the “AdjustableHud” mod only use the `-DENABLE_TFE=OFF` option.

### Freedesktop
On Freedesktop compliant systems package maintainers are encouraged to use the provided [AppStream meta data file](TheForceEngine/io.github.theforceengine.tfe.Mod.AdjustableHud.metadata.xml) when packing the “AdjustableHud” mod into a separate package.
