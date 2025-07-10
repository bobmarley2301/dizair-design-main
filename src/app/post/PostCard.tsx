import React from "react";
import Image from "next/image";
import styles from "../styles/ProfilePage.module.css";

interface PostCardProps {
  avatar: string;
  name: string;
  username: string;
  image?: string;
  isMain?: boolean;
}

const placeholder = "/image.jpg";

const PostCard: React.FC<PostCardProps> = React.memo(({ avatar, name, username, image, isMain }) => (
  <div className={styles.postCard}>
    <div className={styles.postHeader}>
      <Image
        src={avatar}
        alt={name}
        width={40}
        height={40}
        className={styles.postAvatar}
        aria-label={name + " avatar"}
        onError={(e) => (e.currentTarget.src = placeholder)}
      />
      <div>
        <div className={styles.postName}>{name}</div>
        <div className={styles.postUsername}>{username}</div>
      </div>
    </div>
    {image && (
      <Image
        src={image}
        alt={name + " post"}
        width={320}
        height={260}
        className={styles.postImage}
        onError={(e) => (e.currentTarget.src = placeholder)}
        priority={!!isMain}
      />
    )}
  </div>
));

export default PostCard; 