# @atb-as/design-system

Monorepo for handling theming, colors, typography and more for different applications and solutions from AtB.

- [`@atb-as/theme`](./packages/theme)
- [`@atb-as/assets`](./packages/assets)


Current flow for making changes:
- Create a branch for the changes
- Apply the changes in the .ts-files
- Build with `yarn build-all` to apply the changes to the .css-files
- Create PR for review and merge to main after approval
- Make sure you are authenticated through npm by running `npm whoami`
- Make sure your npm user has access to publish packages to AtB's npm repo.
- Publish from main with `yarn pub`. When selecting version number, follow these guidelines:
	- **Major**: Breaking change. This version _require_ you to do code modifications after upgrading on the consumer side. This includes cases where visual changes, like colors or illustrations, are changed in a way that could require changes.
	- **Minor**: This version extends functionality.
	- **Patch**: This version affects no APIs at all, just changes to existing code.

For pre-releases use `yarn pub --pre-dist-tag next` which will make the package available as `@next`
