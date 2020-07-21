import React from 'react';
import Layout from '@theme/Layout';
import styles from './style.module.css';
import profile from './about.json';
import classnames from 'classnames';
import { SimpleImg } from 'react-simple-img';

const openWindow = (url) => window.open(url);

export default function About() {
  return (
    <Layout title='About' className='sample'>
      <div>
        <div className={styles.container}>
          <div className={styles.col1}>
            <SimpleImg
              className={styles.avatar}
              placeholder={'#333'}
              importance={'high'}
              width={280}
              height={280}
              src={profile.avatar_url}
            />
            <h2 className={styles.name}>{profile.name}</h2>
            <p className={styles.desc}>{profile.description}</p>
            <div className={styles.socialContainer}>
              {profile.social.map((item, index) => {
                return item.image_url === 'Github' ? (
                  <span
                    onClick={() => openWindow(item.link)}
                    key={index}
                    className={classnames(styles.pointer, 'header-github-link')}
                  />
                ) : (
                  <span onClick={() => openWindow(item.link)}>
                    <SimpleImg
                      key={index}
                      className={classnames(styles.pointer, styles.socialIcon)}
                      placeholder={'#333'}
                      importance={'high'}
                      width={24}
                      height={24}
                      src={item.image_url}
                    />
                  </span>
                );
              })}
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <h1 className={styles.heading}> Work Experience 🧑🏻‍💻</h1>
              {profile.experience.map((item) => {
                return (
                  <div key={item.company} className={styles.timelineContainer}>
                    <div className={classnames('blob', styles.marker)}></div>
                    <div className={styles.timelineContent}>
                      <h3>
                        {item.company}
                        <span className={styles.period}>{item.period}</span>
                      </h3>
                      <p>{item.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.col3}>
            <div>
              <h1 className={styles.heading}> My skills on 💻</h1>
              <div className={styles.techs}>
                {profile.technologies.experienced.map((item) => {
                  return (
                    <span key={item.name} style={{ paddingBottom: '20px' }}>
                      <SimpleImg
                        className={styles.techLogo}
                        placeholder={'#333'}
                        importance={'high'}
                        width={38}
                        height={38}
                        src={item.logo}
                      />
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className={styles.heading} style={{ paddingTop: '20px' }}>
                 Current Learnings 🤓
              </h1>
              <div className={styles.techs}>
                {profile.technologies.learning.map((item) => {
                  return (
                    <span style={{ paddingBottom: '20px' }}>
                      <SimpleImg
                        key={item.name}
                        className={styles.techLogo}
                        placeholder={'#333'}
                        importance={'high'}
                        width={38}
                        height={38}
                        src={item.logo}
                      />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
