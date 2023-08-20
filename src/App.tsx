import { FC, useEffect, useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { Portfolio } from "./pages/Portfolio";
import Cookies from "universal-cookie";

export const App: FC = () => {
  const cookies = new Cookies();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    cookies.get("theme") ?? "light"
  );
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    cookies.set("theme", colorScheme, { path: "/" });
  }, [colorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Portfolio />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
