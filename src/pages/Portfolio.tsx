import { Button } from "@mantine/core";
import { FC } from "react";
import { About } from "../components/About/About";
import { Layout } from "../components/Layout/Layout";

export const Portfolio: FC = () => {
  return (
    <Layout>
      <About />
      {/* <Project />
      <Images />
      <Contacts /> */}
    </Layout>
  );
};
