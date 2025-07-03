# @atb-as/design-system

Monorepo for handling theming, colors, typography and more for different applications and solutions from AtB.

- [`@atb-as/theme`](./packages/theme)
- [`@atb-as/assets`](./packages/assets)

## Requirements

- node version 22 (or below)
- yarn

## Release

1. Merge a PR to main, where the commit message follows the [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/).
2. The Github action `release-please-action` will create a PR to update version and changelog for the packages that was changed in the PR.
    - `feat` will be a minor release.
    - `fix` will be a patch release.
    - Adding `!` after the prefix (e.g. `feat!`) means it is a breaking change, and will be a major release. This includes any changes to the public API that requires users of the package to update any code.
    - Other prefixes such as `chore` or `refactor` will not trigger a release.
3. Merge the release PR to main to trigger a NPM release.

For more details, see [release-please-action](https://github.com/googleapis/release-please-action).
