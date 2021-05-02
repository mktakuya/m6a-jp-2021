import { ReactNode } from "react";
import Head from "next/head";
import { Container, Flex, Heading, HStack } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = "m6a.jp" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Container maxWidth="1200px" m="3rem auto 6rem" p="0.25rem 0.5rem">
      {children}
    </Container>
  </div>
);
