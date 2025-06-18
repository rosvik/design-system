# @atb-as/design-system

Monorepo for handling theming, colors, typography and more for different applications and solutions from AtB.

- [`@atb-as/theme`](./packages/theme)
- [`@atb-as/assets`](./packages/assets)

## Requirements

- node version 22 (or below)
- yarn
- npm account with access to AtBs npm repository authenticated locally

## Making changes

Current flow for making changes:

- Create a branch for the changes
- Apply the changes in the .ts-files
- Build with `yarn build-all` to apply the changes to the .css-files
- The `yarn build-all` will also validate asset changes, and it will tell you if some assets are missing or not provided for OMS partners. (e.g. no common asset for fallback)
- Fix any issues from the `build-all` script
- Create PR for review and merge to main after approval
- Make sure you are authenticated through npm by running `npm whoami`
- Make sure your npm user has access to publish packages to AtB's npm repo.
- Publish from main with `yarn pub`. When selecting version number, follow these guidelines:
  - **Major**: Breaking change. This version _require_ you to do code modifications after upgrading on the consumer side. (e.g. converting from mono asset to a light-dark themed asset, or vice-versa).
  - **Minor**: This version extends functionality (e.g. adding assets that will be used in a new version of the app).
  - **Patch**: This version affects no APIs at all, just changes to existing code. (e.g. replacing assets/colors).

For pre-releases use `yarn pub --pre-dist-tag next` which will make the package available as `@next`
