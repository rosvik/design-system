# `@atb-as/assets`

## Usage

### Import through `ts`/`js`:

```ts
import generateAssets from '@atb-as/assets';

// This line will copy assets for selected orgId to selected destinationDirectory
generateAssets(orgId: string, destinationDirectory: string)
```

### Run as CLI:

Format:

```sh
npx @atb-as/generate-assets orgId outputDirectory
```

Example:

```sh
npx @atb-as/generate-assets atb static
```

Or as a local dependency

```
npm install -D @atb-as/generate-assets

# Run locally installed bin
npx generate-assets
```
