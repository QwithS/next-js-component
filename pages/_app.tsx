import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";

export default function CopyingTwitter({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}
