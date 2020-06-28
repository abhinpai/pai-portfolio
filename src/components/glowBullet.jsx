import React from "react";
import styles from "./styles.module.css";

export default function GlowBullet({ children, focusWord, highlightWord }) {
  return (
    <div className={styles.masterDiv}>
      <span className={styles.blob} />
      <h3>
        {highlightWord && <span className={styles.highlightWord}>{highlightWord}</span>}
        {focusWord && <span className={styles.focus}>{focusWord}</span>}
        {children}
      </h3>
    </div>
  );
}
