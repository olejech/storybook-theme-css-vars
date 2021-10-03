import { useState } from "react";
import { STORYBOOK_IFRAME_ID } from "../constants";
import { Theme } from "./types";

const getIframe = (selector: string): HTMLElement => {
  const iframe = document.getElementById(
    STORYBOOK_IFRAME_ID
  ) as HTMLIFrameElement;
  return iframe.contentDocument.querySelector(selector);
};

export const useTheme = (theme: Theme) => {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    const iframe = getIframe(theme.selector);
    iframe.setAttribute(theme.dataAttr, isDark ? "light" : "dark");
    setIsDark((prev) => !prev);
  };

  return { isDark, toggleMode };
};
