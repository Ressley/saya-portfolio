import { Box, createStyles } from "@mantine/core";
import { FC, ReactNode } from "react";
import { CustomHeader } from "./Header";

const useStyles = createStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
}));

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <CustomHeader />
      {children}
    </Box>
  );
};
