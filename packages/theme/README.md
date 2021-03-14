# `@atb/theme`

## Install

```sh
yarn add @atb/theme
```

## Usage

Import through `ts`/`js`:

```ts
import {colors} from '@atb/theme';

console.log(colors.primary.gray_100); //=> #F5F5F6
console.log(colors.text.dark); //=> #000000
```

```ts
import {themes} from '@atb/theme';

console.log(themes.light.colors.background_0);
```

### Usage CSS

Or you could import CSS files or as CSS Modules. The actual content is currently the same, but named differently to be imported by CSS modules.

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
