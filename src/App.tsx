import { FC, useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { Portfolio } from "./pages/Portfolio";

export const App: FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

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
