# `@atb-as/generate-assets`

## Usage

### Run as CLI:

Format:

````
Usage: npx @atb-as/generate-assets [options] <type> <orgId>

Arguments:
  type                    Type of assets to generate (choices: "colors", "all", "mono")
  orgId                   Generate for specific organization (choices: "atb", "nfk")

Options:
  -o, --out-dir <output>  Output directory
  -d, --debug             Log all files generated (default: false)
  -im, --ignore-mono      Ignore generating mono-icons with theme colors. (default: false)
  -g, --glob [glob]       Pass in custom blob for matching files. (default: "**/*.{svg,png,jpg,jpeg,ico}")
  -h, --help              display help for command

```

As a local dependency

````

npm install -D @atb-as/generate-assets

# Run locally installed bin

npx generate-assets -h

````

### Import through `ts`/`js`:

```ts
import generateAssets from '@atb-as/assets';

// This line will copy assets for selected orgId to selected destinationDirectory
generateAssets(orgId: string, destinationDirectory: string)
````
