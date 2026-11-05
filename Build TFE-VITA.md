# Build TFE-VITA

Follow this guide before starting to build

[Setup build environment](https://affine.senoner.space/workspace/9cad22ef-5772-4844-91a2-32a490adc4f9/wjziC6XYGKWE2j2LmYSbd)

```shellscript
cd TheForceEngine-VITA
cmake -S . -B ../tfe-vita-optin-build -DTFE_VITA=ON \
  -DTFE_VITA_GAME_DATA_DIR="$HOME/TFE-VITA/TFE_Data" \
  -DCMAKE_BUILD_TYPE=Release -DCMAKE_POLICY_VERSION_MINIMUM=3.5
cmake --build ../tfe-vita-optin-build --target tfe_vpk -j"$(nproc)"
```
