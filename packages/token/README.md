# PostCSS plugin for typesafe CSS Custom Properties 

This package adds a `token(...)` function to your CSS, which checks and parses the token passed in the argument
and turns it into a CSS Custom Property (`var(--variable-name)`).

## Install

Install PostCSS and this plugin as dev dependencies.

```sh
yarn add postcss @atb-as/token --dev
```

### Configure the plugin

Add a `postcss.config.json` file in the root of your project with the following content, or extend the current one.

```json
/** postcss.config.json */

{
  "plugins": [
    "@atb-as/token"
  ]
}
```

#### NextJS

> ⚠️ [NextJS preconfigures PostCSS](https://nextjs.org/docs/pages/building-your-application/configuring/post-css).
> Therefore, we need to include the entire NextJS config for PostCSS
> and add the `@atb-as/token` plugin in addition.

For NextJS `15.0.3`, the default PostCSS configuration with the `@atb-as/token` plugin shows below. This is also
confirmed to work on NextJS `14.2.13`.

For this configuration to work, we also need to add other PostCSS plugins explicitly to our `package.json`.

```sh
yarn add postcss-flexbugs-fixes postcss-preset-env --dev
```

```json
/** postcss.config.json */
{
  "plugins": [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ],
    "@atb-as/token"
  ]
}
```

## Usage

This plugin enables a `token` function in CSS, which checks the validity of the token and returns the
matching CSS Custom Property.

`token(variable)`: `string`
Replaces the token call with the corresponding CSS Custom Property.

Throws an error if the variable does not exist or if the syntax is incorrect.

- `variable`: `string`
The camelCase name of a variable surrounded by single quote `'` or double quotes `"` segmented by a dot `.`.

### Example

```css
/** button.module.css */

.button--primary {
  color: token('color.interactive.0.foreground.primary');
  background-color: token('color.interactive.0.background');
}
```

This is compiled to CSS Custom Properties.

```css
/** Compiled button.module.css */

.button--primary {
  color: var(--color-interactive-0-foreground-primary);
  background-color: var(--color-interactive-0-background);
}
```

