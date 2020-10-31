import styles from "./NavBarComponent.module.scss";
import BookMarkIcon from "public/img/nav-bar/bookmark.svg";
import ExploreIcon from "public/img/nav-bar/explore.svg";
import HomeIcon from "public/img/nav-bar/home.svg";
import ListIcon from "public/img/nav-bar/list.svg";
import LogoIcon from "public/img/nav-bar/logo.svg";
import MsgIcon from "public/img/nav-bar/message.svg";
import MoreIcon from "public/img/nav-bar/more.svg";
import NotiIcon from "public/img/nav-bar/notification.svg";
import ProfileIcon from "public/img/nav-bar/profile.svg";
import React from "react";

export default function NavBarComponent(): React.ReactElement {
  const navList = [
    { title: "홈", img: <HomeIcon /> },
    { title: "탐색하기", img: <ExploreIcon /> },
    { title: "알림", img: <NotiIcon /> },
    { title: "쪽지", img: <MsgIcon /> },
    { title: "북마크", img: <BookMarkIcon /> },
    { title: "리스트", img: <ListIcon /> },
    { title: "프로필", img: <ProfileIcon /> },
    { title: "더 보기", img: <MoreIcon /> },
  ];

  return (
    <div>
      <a>
        <div className={styles.logoBox}>
          <LogoIcon className={styles.logo} />
        </div>
      </a>

      <nav>
        {navList.map((navItem, i) => (
          <a key={i} className={styles.navItem}>
            <div className={styles.contentsWrapper}>
              {navItem.img}
              <div className={styles.titleWrapper}>
                <span className={styles.titleText}>{navItem.title}</span>
              </div>
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
}
