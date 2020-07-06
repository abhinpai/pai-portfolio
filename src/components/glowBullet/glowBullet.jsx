import React from 'react';
import styles from './styles.module.css';

export default function GlowBullet({
  fontWeight,
  children,
  focusWord,
  highlightWord,
  highlightWords,
}) {
  return (
    <div className={styles.masterDiv}>
      <span className={styles.blob} />
      {(fontWeight == 'h1' && (
        <h1>
          <GlowChild
            focusWord={focusWord}
            highlightWord={highlightWord}
            highlightWords={highlightWords}
            childText={children}
          />
        </h1>
      )) ||
        (fontWeight == 'h2' && (
          <h2>
            <GlowChild
              focusWord={focusWord}
              highlightWord={highlightWord}
              highlightWords={highlightWords}
              childText={children}
            />
          </h2>
        )) ||
        (fontWeight == 'h3' && (
          <h3>
            <GlowChild
              focusWord={focusWord}
              highlightWord={highlightWord}
              highlightWords={highlightWords}
              childText={children}
            />
          </h3>
        )) ||
        (fontWeight == 'h4' && (
          <h4>
            <GlowChild
              focusWord={focusWord}
              highlightWord={highlightWord}
              highlightWords={highlightWords}
              childText={children}
            />
          </h4>
        )) || (
          <p>
            <GlowChild
              focusWord={focusWord}
              highlightWord={highlightWord}
              highlightWords={highlightWords}
              childText={children}
            />
          </p>
        )}
      <br />
    </div>
  );
}

function GlowChild({ focusWord, highlightWord, highlightWords, childText }) {
  return (
    <>
      {highlightWords &&
        highlightWords.forEach((element) => {
          <span className={styles.highlightWord}>{element}</span>;
        })}
      {highlightWord && (
        <span className={styles.highlightWord}>{highlightWord}</span>
      )}
      {focusWord && <span className={styles.focus}>{focusWord}</span>}
      {childText && childText}
    </>
  );
}
