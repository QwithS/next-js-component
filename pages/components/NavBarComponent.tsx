import BookMarkIcon from "public/img/nav-bar/bookmark.svg";
import ExploreIcon from "public/img/nav-bar/explore.svg";
import HomeIcon from "public/img/nav-bar/home.svg";
import ListIcon from "public/img/nav-bar/list.svg";
import LogoIcon from "public/img/nav-bar/logo.svg";
import ProfileIcon from "public/img/nav-bar/logo.svg";
import MsgIcon from "public/img/nav-bar/message.svg";
import MoreIcon from "public/img/nav-bar/more.svg";
import NotiIcon from "public/img/nav-bar/notification.svg";

import React from "react";

export default function NavBarComponent(): React.ReactElement {
  return (
    <div>
      <LogoIcon />
      <HomeIcon />
      <ExploreIcon />
      <NotiIcon />
      <MsgIcon />
      <BookMarkIcon />
      <ListIcon />
      <ProfileIcon />
      <MoreIcon />
    </div>
  );
}
