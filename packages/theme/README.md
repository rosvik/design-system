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
