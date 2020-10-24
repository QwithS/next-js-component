import { AppProps } from "next/app";
import React from "react";
import "styles/base.scss";

export default function CopyingTwitter({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}
