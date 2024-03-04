# `@atb-as/generate-assets`

## Usage

### Run as CLI:

Format:

```
Usage: npx @atb-as/generate-assets [options] <type> <orgId>

Arguments:
  type                           Type of assets to generate (choices: "colors", "all", "mono")
  orgId                          Generate for specific organization (choices: "atb", "nfk", "fram", "troms")

Options:
  -o, --out-dir <output>         Output directory
  -d, --debug                    Log all files generated (default: false)
  -nm, --no-generate-mono-theme  Ignore generating themed mono-icons, but keep general mono icons.
  -g, --glob [glob]              Pass in custom glob for matching files. (default: "**/*.{svg,png,jpg,jpeg,ico}")
  -h, --help                     display help for command
```

As a local dependency

```

npm install -D @atb-as/generate-assets

# Run locally installed bin

npx generate-assets -h

```

### Import through `ts`/`js`:

```ts
import generateAssets from '@atb-as/generate-assets';

// This line will copy assets for selected orgId to selected destinationDirectory
generateAssets(
  assetType: AssetTypes,
  orgId: ThemeVariant,
  destinationDirectory: string,
  opts: Options = defaultOpts,
)

// Where options are:
type Options = {
  generateMonoTheme?: boolean;
  onlyOutputMono?: boolean;
  patterns?: string | readonly string[];
};
const defaultOpts: Options = {
  generateMonoTheme: true,
  onlyOutputMono: false,
};
```
