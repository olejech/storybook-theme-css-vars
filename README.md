# Storybook Theme CSS Custom Properties

![Storybook theme css vars](storybook-theme-css-vars.gif?raw=true "Storybook addon theme css")

This addon can be used to set a data attribute in Storybook's iframe HTML
element triggering a toggle between dark and light theme.

Example styles:

```css
:root {
  --white: #fff;
  --black: #000;
}

:root [data-theme="dark"] {
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
    selector: "body (or your selector with data attribute)",
    dataAttr: "data-theme (or your data attribute)",
    nameLightTheme: "light (or your name of light theme)",
    nameDarkTheme: "dark (or your name of dark theme)",
  },
};
```

- nameLightTheme (optional, default — "light")
- nameDarkTheme: (optional, default — "dark"),

## Usage

Click on the new theme toggle in the toolbar to toggle between dark and light mode.
