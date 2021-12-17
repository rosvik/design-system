# `@atb-as/assets`

## Usage

### Run as CLI:

Format:

````
usage: npx @atb-as/generate-assets <orgId> <output directory> [--glob <string>]

Outputs assets for a specific organization in the specified output directory.

  Inputs:
    -v | --verbose        Log all files generated
    -h                    Show this help
    -g | --glob           Pass in custom blob for matching files. Defaults to **/*.{svg,png,jpg,jpeg,ico}
    -i | --ignoreMono     Don't generate dark/light mono based on theme colors for orgId

  Example: npx @atb-as/generate-assets atb ./static --glob "**.svg"

Valid orgIds are: atb,nfk
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
