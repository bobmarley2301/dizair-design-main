'use client';
import React, { useCallback } from "react";
import Image from "next/image";
import styles from "../styles/ProfilePage.module.css";

const placeholder = "/image.jpg";

const comments = [
  {
    avatar: "/Claira.jpg",
    name: "Claire Dangais",
    username: "@ClaireD15",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  },
  {
    avatar: "/Claira.jpg",
    name: "Claire Dangais",
    username: "@ClaireD15",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  },
  {
    avatar: "/Claira.jpg",
    name: "Claire Dangais",
    username: "@ClaireD15",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  },
  {
    avatar: "/Claira.jpg",
    name: "Claire Dangais",
    username: "@ClaireD15",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  },
  {
    avatar: "/Claira.jpg",
    name: "Claire Dangais",
    username: "@ClaireD15",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  }
];

interface DetailsPageProps {
  onBack?: () => void;
}

const DetailsPage: React.FC<DetailsPageProps> = React.memo(({ onBack }) => {
  const handleBack = useCallback(() => {
    if (onBack) onBack();
  }, [onBack]);

  return (
    <main className={styles.bg}>
      <section className={styles.profileCard}>
        <div className={styles.headerBg}>
          <button className={styles.menuBtn} onClick={handleBack} style={{left: 20, right: 'auto'}} aria-label="Back">
            <Image src="/ico/ArrowLeft.png" alt="back" width={24} height={24} />
          </button>
          <button className={styles.menuBtn} style={{right: 20}} aria-label="Open menu">
            <Image src="/ico/Message.png" alt="menu" width={20} height={20} className={styles.menuIcon} />
          </button>
        </div>
        <div style={{padding: '24px 24px 0 24px'}}>
          <div className={styles.postCard}>
            <div className={styles.postHeader}>
              <Image src="/Claira.jpg" alt="Claire" width={40} height={40} className={styles.postAvatar} onError={e => (e.currentTarget.src = placeholder)} />
              <div>
                <div className={styles.postName}>Claire Dangais</div>
                <div className={styles.postUsername}>@ClaireD15</div>
              </div>
            </div>
            <Image src="/image.jpg" alt="sea" width={320} height={160} className={styles.postImage} onError={e => (e.currentTarget.src = placeholder)} priority />
          </div>
          {comments.map((c, i) => (
            <div className={styles.postCard} key={i} style={{display: 'flex', alignItems: 'flex-start', gap: 12}}>
              <Image src={c.avatar} alt={c.name} width={40} height={40} className={styles.postAvatar} onError={e => (e.currentTarget.src = placeholder)} />
              <div>
                <div className={styles.postName}>{c.name}</div>
                <div className={styles.postUsername}>{c.username}</div>
                <div style={{fontSize: 14, color: '#444', marginTop: 4}}>{c.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
});

export default DetailsPage; 