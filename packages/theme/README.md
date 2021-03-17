# `@atb-as/theme`

## Install

```sh
yarn add @atb-as/theme
```


## Usage

Import through `ts`/`js`:

```ts
import {colors} from '@atb-as/theme';

console.log(colors.primary.gray_100); //=> #F5F5F6
console.log(colors.text.dark); //=> #000000
```

```ts
import {themes} from '@atb-as/theme';

console.log(themes.light.colors.background_0);
```


### Usage CSS

Or you could import CSS files or as CSS Modules. The actual content is currently the same, but named differently to be imported by CSS modules.


```ts
// When using imports from bundlers

// With CSS Modules
import * as classNamesTheme from '@atb-as/theme/lib/theme.module.css';
import * as classNamesTypo from '@atb-as/theme/lib/typography.module.css';


// Without CSS Modules
import '@atb-as/theme/lib/theme.css';
import '@atb-as/theme/lib/typography.css';
```

```css
/* Using css/postcss/bundlers */
@import '@atb-as/theme/lib/theme.module.css';
@import '@atb-as/theme/lib/typography.module.css';

/* or without modules */
@import '@atb-as/theme/lib/theme.css';
@import '@atb-as/theme/lib/typography.css';


/* And potentially */
@value myClassname from "@atb-as/theme/lib/theme.css";
```

_(note: This all depends on how you setup bundlers and consumes styles.)_


#### Theming with CSS

Uses CSS Custom Properties to do theming. This means by default it only support newer browsers. This needs to be compansated for by the consumer if wanted.
By setting class `light` or `dark` on a parent component the cascading of custom props will change the theme. This means we can set what level we want the theming to operate on.

```html
<body class="light">
  <!-- My content -->
</body>

<body class="dark">
  <!-- My content -->
</body>
```

**You must set either `light` or `dark` for themes to work.**

#### Regular CSS

With regular CSS.

```html
<!-- Named same as theme objects -->

<div class="colors-primary_2">
  <!-- background color and text color set -->
</div>

<div class="colors-transport_city" />
```

#### CSS Modules

```css
.mySpecificClassName {
  composes: colors-primary_2 from 'theme.modules.css';
}
```

```css
@import 'theme.modules.css';

.mySpecificClassName {
  composes: colors-transport_train;
}
```

### Theme API

#### `createThemes(overrides?: ConfigurationOverride<Theme>): Themes`

Create new themes (light/dark) with optinally overriden defaults

```ts
const themes = createThemes({
  light: {
    spacings: {
      medium: 20,
    },
  },
});
themes.dark.spacings.medium;
//=> 20
```


#### `createExtendedThemes<T>(extension: T)`

Use Theme as base and extend with new properties. Properties can be nested and will be deep merged.

```ts
type FooExtension = {
  statusBarStyle: 'dark' | 'light';
}
const _themes = createExtendedThemes<FooExtension>({
  light: {statusBarStyle: 'dark'},
  dark: {statusBarStyle: 'light'}
});
_themes.dark.statusBarStyle;
//=> (property) statusBarStyle: "dark" | "light"
```

### Typography API

#### `createTextTypeStyles(PlatformTypes, ConfigurationOverride<TextTypeStyles>)`

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

#### `extendTextTypeStyles<T>(type: PlatformTypes, extension: T)`

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
//=> (property) additional: boolean
```




### Building locally

From monorepo root, to generate CSS run:

```
yarn workspace @atb-as/theme create-css
```

or from project root:

```
yarn create-css
```