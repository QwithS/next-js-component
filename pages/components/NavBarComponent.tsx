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
  return (
    <div>
      <LogoIcon className={styles.logo} />
      <nav>
        <a>
          <div className={styles.contentsWrapper}>
            <HomeIcon />홈
          </div>
        </a>

        <a>
          <div className={styles.contentsWrapper}>
            <ExploreIcon />
            탐색하기
          </div>
        </a>
        <a>
          <div className={styles.contentsWrapper}>
            <NotiIcon />
            알림
          </div>
        </a>
        <a>
          <div className={styles.contentsWrapper}>
            <MsgIcon />
            쪽지
          </div>
        </a>
        <a>
          <div className={styles.contentsWrapper}>
            <BookMarkIcon />
            북마크
          </div>
        </a>
        <a>
          <div className={styles.contentsWrapper}>
            <ListIcon />
            리스트
          </div>
        </a>
        <a>
          <div className={styles.contentsWrapper}>
            <ProfileIcon />
            프로필
          </div>
        </a>
        <a>
          <div className={styles.contentsWrapper}>
            <MoreIcon />
            더보기
          </div>
        </a>
      </nav>
      <div>트윗</div>
    </div>
  );
}
