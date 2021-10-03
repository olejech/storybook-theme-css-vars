import React from "react";
import { IconButton } from "@storybook/components";
import { DEFAULT_PARAMS, PARAM_THEME, TOOL_ID } from "../constants";
import { SunIcon, MoonIcon } from "./Icons";
import { useTheme } from "./useTheme";
import { useParameter } from "@storybook/api";

export const ThemeSwitcher = () => {
  const theme = useParameter(PARAM_THEME, DEFAULT_PARAMS);
  const { isDark, toggleMode } = useTheme(theme);

  return (
    <IconButton key={TOOL_ID} title="Change theme mode" onClick={toggleMode}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
