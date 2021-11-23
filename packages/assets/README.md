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

```ts
npx @atb-as/assets orgId outputDirectory
```

Example:

```ts
npx @atb-as/assets atb static
```
