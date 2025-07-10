"use client";
import React, { useState } from "react";
import Image from "next/image";
import PostCard from "./PostCard";
import styles from "./ProfilePage.module.css";

const placeholder = "/image.jpg";

interface ProfilePageProps {
  onPostClick?: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onPostClick }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.bg}>
      <section className={styles.profileCard}>
        <div className={styles.headerBg}>
          <button className={styles.menuBtn} onClick={() => setMenuOpen((v) => !v)}>
            <Image src="/ico/Message.png" alt="menu" width={20} height={20} className={styles.menuIcon} />
          </button>
          <Image src="/Avatar.jpg" alt="avatar" width={96} height={96} className={styles.avatar} onError={e => (e.currentTarget.src = placeholder)} />
          {menuOpen && (
            <div className={styles.menuPopup}>
              <button className={styles.menuPopupItem}>Edit Profile</button>
              <button className={styles.menuPopupItem}>Logout</button>
            </div>
          )}
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.statsRow}>
            <div>
              <div className={styles.statsValue}>1k</div>
              <div className={styles.statsLabel}>Followers</div>
            </div>
            <div>
              <div className={styles.statsValue}>342</div>
              <div className={styles.statsLabel}>Following</div>
            </div>
          </div>
          <div className={styles.username}>@Catherine13</div>
          <div className={styles.bio}>
            My name is Catherine. I like dancing in the rain and travelling all around the world.
          </div>
          <div className={styles.actionRow}>
            <button
              className={styles.followBtn}
              onClick={() => setIsFollowing((v) => !v)}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button className={styles.messageBtn}>Message</button>
          </div>
          <div className={styles.tabsRow}>
            <div className={styles.tabActive}>All</div>
            <div className={styles.tab}>Photos</div>
            <div className={styles.tab}>Videos</div>
          </div>
        </div>
        <div className={styles.postsList}>
          <div onClick={onPostClick} style={{cursor: 'pointer'}}>
            <PostCard
              avatar="/Claira.jpg"
              name="Claire Dangais"
              username="@ClaireD15"
              image="/image.jpg"
            />
          </div>
          <div onClick={onPostClick} style={{cursor: 'pointer'}}>
            <PostCard
              avatar="/Farita.jpg"
              name="Farita Smith"
              username="@SmithFra"
              image="/image1.jpg"
            />
          </div>
          <div onClick={onPostClick} style={{cursor: 'pointer'}}>
            <PostCard
              avatar="/Farita.jpg"
              name="Farita Smith"
              username="@SmithFra"
              image="/image1.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
