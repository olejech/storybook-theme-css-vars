# Storybook Theme CSS Custom Properties

This addon can be used to set a data attribute in Storybook's iframe html
element triggering a toggle between dark and light mode.

Example styles:

```css
:root {
  --white: #fff;
  --black: #000;
}

:root [data-theme-mode="dark"] {
  --white: #000;
  --black: #fff;
}
```

## Installation

```bash
npm i -D storybook-theme-css-vars
```

Add the addon to `.storybook/main.js`:

```js
module.exports = {
  addons: ["storybook-theme-css-vars"],
};
```

Add parameters options to `.storybook/preview.js`:

```js
export const parameters = {
  theme: {
    selector: ".your-selector",
    dataAttr: "data-your-attribute",
  },
};
```

## Usage

Click on the new theme toggle in the toolbar to toggle between dark and light mode.
