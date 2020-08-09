import "styles/main.css";
import "typeface-ibm-plex-sans";
import "typeface-inter";

import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "store/theme";
import MainStyles from "styles/global";
import Head from "next/head";
import NavbarLarge from "components/organisms/Navbar/large";
import Shoutout from "components/organisms/Shoutout";

export default ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>NotionAPI</title>
    </Head>

    <MainStyles />

    <NavbarLarge />

    <Component {...pageProps} />

    <Shoutout />
  </ThemeProvider>
);
