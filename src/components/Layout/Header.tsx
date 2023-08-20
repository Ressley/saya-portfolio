import {
  Box,
  createStyles,
  Switch,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { FC } from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

const useStyles = createStyles(() => ({
  headerWrapper: {
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "space-between",
  },
  links: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
  linkActive: {},
  controls: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
}));

const links = [
  {
    label: "Profile",
  },
  {
    label: "Showcase",
  },
  {
    label: "Projects",
  },
  {
    label: "Contact",
  },
];

export const CustomHeader: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Box className={classes.headerWrapper}>
      <Title>saya.</Title>
      <Box className={classes.controls}>
        <Box className={classes.links}>
          {links.map((item) => {
            return <Text>{item.label}</Text>;
          })}
        </Box>
        <Switch
          checked={colorScheme === "dark"}
          onChange={() => toggleColorScheme()}
          size="lg"
          onLabel={
            <IconSun color={theme.colors.dark[0]} size="1.25rem" stroke={1.5} />
          }
          color="dark"
          offLabel={
            <IconMoonStars
              color={theme.colors.gray[6]}
              size="1.25rem"
              stroke={1.5}
            />
          }
        />
      </Box>
    </Box>
  );
};
