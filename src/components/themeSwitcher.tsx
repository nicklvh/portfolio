import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

type ThemeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export default function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label="Toggle theme"
      {...props}
    />
  );
}
