# @atb-as/design-system

Monorepo for handling theming, colors, typography and more for different applications and solutions from AtB.

- [`@atb-as/theme`](./packages/theme)
- [`@atb-as/assets`](./packages/assets)


Current flow for making changes:
- Create a branch for the changes
- Apply the changes in the .ts-files
- Build with `yarn build-all` to apply the changes to the .css-files
- Create PR for review and merge to master after approval
- Publish from master with `yarn pub`
