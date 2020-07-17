import React from 'react';
import Layout from '@theme/Layout';
import styles from './style.module.css';

export default function About() {
  return (
    <Layout title='About'>
      <div>
        <div className={styles.container}>
          <div className={styles.profile}>
            <img
              src={'https://avatars0.githubusercontent.com/u/15942876'}
              loading='lazy'
              className={styles.avatar}
            />
            <h2 className={styles.name}>Abhin Pai</h2>
            <p className={styles.desc}>
              A FullStack Software Engineer 🧑🏻‍💻 @honeywell. A Self-paced
              learner 🤓 always hunt for an opportunity to hone my skill ⚔️
            </p>
          </div>
          <div className={styles.item}> Item 1</div>
          <div className={styles.item}> Item 1</div>
        </div>
      </div>
    </Layout>
  );
}
