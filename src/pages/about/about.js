import React from 'react';
import Layout from '@theme/Layout';
import styles from './style.module.css';
import classnames from 'classnames';
import profile from './about.json';

export default function About() {
  return (
    <Layout title='About' className='sample'>
      <div>
        <div className={styles.container}>
          <div className={styles.col1}>
            <img
              src={'https://avatars0.githubusercontent.com/u/15942876'}
              loading='lazy'
              className={styles.avatar}
            />
            <h2 className={styles.name}>{profile.name}</h2>
            <p className={styles.desc}>{profile.description}</p>
            <div className={styles.socialContainer}>
              {profile.social.map((item, index) => {
                return (
                  <span className={styles.item} key={index}>
                    {' '}
                    {item.image_url}
                  </span>
                );
              })}
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <h1 className={styles.heading}> Work Experience 🧑🏻‍💻</h1>
              <p className="message" style={{textAlign:"center"}}>contents will be updated soon</p>
            </div>
          </div>
          <div className={styles.col3}>
            <div>
              <h1 className={styles.heading}>🛡 My weapons ⚔️</h1>
              <div className={styles.techs}>
                {profile.technologies.experienced.map((item) => {
                  return (
                    <img
                      className={styles.techLogo}
                      src={item.logo}
                      alt={item.name}
                    ></img>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className={styles.heading} style={{ paddingTop: '20px' }}>
                🤓 Current Learnings 📝
              </h1>
              <div className={styles.techs}>
                {profile.technologies.learning.map((item) => {
                  return (
                    <img
                      key={item.name}
                      loading='lazy'
                      className={styles.techLogo}
                      src={item.logo}
                      alt={item.name}
                    ></img>
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
