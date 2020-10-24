import HomeIcon from "public/img/nav-bar/home.svg";
import LogoIcon from "public/img/nav-bar/logo.svg";
import React from "react";

export default function NavBarComponent(): React.ReactElement {
  return (
    <div>
      <LogoIcon />
      <HomeIcon />
    </div>
  );
}
