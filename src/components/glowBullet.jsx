import React from "react";
import styles from "./styles.module.css";

export default function GlowBullet({
  children,
  focusWord,
  highlightWord,
  highlightWords,
}) {
  return (
    <div className={styles.masterDiv}>
      <span className={styles.blob} />
      <h3>
        {highlightWords &&
          highlightWords.forEach((element) => {
            <span className={styles.highlightWord}>{element}</span>;
          })}
        {highlightWord && (
          <span className={styles.highlightWord}>{highlightWord}</span>
        )}
        {focusWord && <span className={styles.focus}>{focusWord}</span>}
        {children && children}
      </h3>
    </div>
  );
}
