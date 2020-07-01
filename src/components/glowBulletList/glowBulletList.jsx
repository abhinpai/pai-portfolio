import React from "react";
import styles from "./styles.module.css";

export default function GlowBulletList({ item, link }) {
  return (
    <div className={styles.masterDiv}>
      <span className={styles.blob} />
      <a href={link} target="_blank">
        {item}
      </a>
    </div>
  );
}
