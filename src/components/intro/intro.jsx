import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

export default function Intro() {
  return (
    <div>
      <h1 className={styles.namaste}>
        <span style={{ verticalAlign: 'middle' }}>Namaste</span> 🙏🏼
      </h1>
      <p className={styles.intoMsg} style={{ paddingTop: '1rem' }}>
        Hello Developer, In this application, I'm trying to unify the majority
        of the <span style={{ color: '#e45405' }}>Frontend</span>,{' '}
        <span style={{ color: '#e87604' }}>Backend</span>,{' '}
        <span style={{ color: '#ed9002' }}>DevOps</span> and,{' '}
        <span style={{ color: '#f0ab00' }}>other topics</span> with respect to
        application development. These contents may help you to develop the
        best, high quality, and versatile application. and I'm pretty sure
        you'll learn the lurks and perks in these contents
      </p>

      <p className={classnames(styles.intoMsg, styles.paddingTop)}>
        If you find these content useful and want to appreciate my work then
        please reach me out{' '}
        <a
          href='https://twitter.com/paiabhin'
          target='_blank'
          className={styles.twitterNamespace}
        >
          @abhinpai
        </a>
      </p>
      <p></p>
    </div>
  );
}
