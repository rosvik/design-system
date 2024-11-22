# `@atb-as/theme`

## Install

```sh
yarn add @atb-as/theme
```

## Recommended usage

### `TS`/`JS` import

Import through `ts`/`js`:

```ts
import {createThemesFor, ThemeVariant} from '@atb-as/theme';
const { light, dark } = createThemesFor(ThemeVariant.AtB)
console.log(light.color.background.neutral[0].background);
// #000000
```

### CSS import

Colors can be imported as CSS files. Typography styles can be imported as CSS Modules.

To retrieve CSS files depending on your organization, we recommend setting up aliasing in your bundler. An example is provided for Webpack. This process is similar for other bundlers

```ts
const orgID = process.env.ORG_ID

webpack(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@atb/theme/theme.css': `@atb-as/theme/lib/generated/themes/${orgId}-theme/theme.css`,
    '@atb/theme/typography.css': '@atb-as/theme/lib/generated/typography.css',
    '@atb/theme/typography.module.css':
      '@atb-as/theme/lib/generated/typography.module.css',
  };
}
```

Then import CSS files using the alias above.

```ts
// When using imports from bundlers

// With CSS Modules for atb-theme
import * as classNamesTypo from '@atb/theme/typography.module.css';

// Without CSS Modules for atb-theme
import '@atb/theme/theme.css';
import '@atb/theme/typography.css';
```

```css
/* Using css/postcss/bundlers */
@import '@atb/theme/typography.module.css';

/* or without modules */
@import '@atb/theme/themes/theme.css';
@import '@atb/theme/typography.css';

/* You can also import from an organization directly */
@value myClassname from "@atb-as/theme/lib/themes/atb-theme/theme.css";
```

_(note: This all depends on how you setup bundlers and consumes styles.)_

#### Using tokens

For CSS, we recommend [our token plugin](https://github.com/AtB-AS/design-system/tree/main/packages/token), which provides typesafety and an easy interfacing for accessing CSS variables (design tokens).

#### Theming with CSS

Uses CSS Custom Properties to do theming. This means by default it only support newer browsers. This needs to be compansated for by the consumer if wanted.
By setting the attribute `data-theme` to `light`, `dark` or `auto` on a parent component the cascading of custom props will change the theme. This means we can set what level we want the theming to operate on.

```html
<body data-theme="light">
  <!-- My content -->
</body>

<body data-theme="dark">
  <!-- My content -->
</body>

<body data-theme="auto">
  <!-- My content -->
</body>
```

`data-theme="auto"` follows the device preferences.

## Theme API

### `createThemes(themes: Themes, overrides?: ConfigurationOverride<Theme>): Themes`

Create new themes (light/dark) with optionally overriden defaults

```ts
const themesVariant = createThemesFor(ThemeVariant.AtB)
const { light, dark } = createThemes(
  themesVariant,
  {
  light: {
    spacings: {
      medium: 20,
    },
  },
});
console.log(light.spacing.medium);
// 20
```

### `createExtendedThemes<T>(themes: Themes, extension: T)`

Use Theme as base and extend with new properties. Properties can be nested and will be deep merged.

```ts
type FooExtension = {
  statusBarStyle: 'dark' | 'light';
}
const themesVariant = createThemesFor(ThemeVariant.AtB)

const { light, dark } = createExtendedThemes<FooExtension>(
  themesVariant,
  {
  light: {statusBarStyle: 'dark'},
  dark: {statusBarStyle: 'light'}
});
console.log(light.statusBarStyle);
// dark
```

## Typography API

### `createTextTypeStyles(PlatformTypes, ConfigurationOverride<TextTypeStyles>)`

Create new text type style with optinally overriden defaults.

```ts
createTextTypeStyles({
  paragraphHeadline: {
    fontWeight: Platform.select({
      ios: '600',
      android: 'bold'
    })
  }
})
```

### `extendTextTypeStyles<T>(type: PlatformTypes, extension: T)`

Use text type style as base and extend with new properties. Properties can be nested and will be deep merged.

```ts
type Foo = {
  paragraphHeadline: {
    additional: boolean;
  };
};
const foo = extendTextTypeStyles<Foo>({
  paragraphHeadline: {
    additional: true,
  },
});

console.log(foo.paragraphHeadline.additional);
// true
```

## Updating the design system

Figma is the source of truth of variables. **Changes should therefore be made in Figma only** and imported into code afterwards through a GitHub Action.

1. Make changes to Figma Variables in Figma
2. Go to [GitHub Actions](https://github.com/AtB-AS/design-system/actions/workflows/design-tokens.yml), click **Run workflow**
```
`Use workflow from`: `main`
`Which org did you make changes for?`: `orgId` // or `all`
```
3. A PR is created with the changes you made in step 1 and selected in step 2. If the expected changes are included, approve and merge the PR

## Building locally

> If you want to make changes to variables, we recommend making changes in Figma and import them into code using the steps above. 

If you want to fetch new variables from Figma, you need to set environment variables.

```sh
$ Replace [id_of_figma_file] with the actual ID of the file
export FIGMA_VARIABLES_URL=https://api.figma.com/v1/files/[id_of_figma_file]/variables/local
 
$ Create access token with Figma Variables read access
$ https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens 
export FIGMA_REST_API_KEY=personal_access_token
```

```sh
yarn

$ Only if you want to fetch new variables
$ Not need when just building the design system from source
yarn workspace @atb-as/theme fetch-variables

yarn workspace @atb-as/theme build
```