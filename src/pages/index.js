import React, {useState} from "react";

import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

const heroImage = ["hero_new.svg", "hero.svg"];


const socialMedia = [
  {
    name: "Blog",
    url: "https://dev.to/abhinpai",
  },
  {
    name: "Github",
    url: "https://github.com/abhinpai",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/PaiAbhin",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/abhinpai",
  },
];

function ReachMe({ name, url }) {
  return (
    <div
      className={classnames("col col--3", styles.feature)}
      style={{ paddingRight: 6 }}
    >
      <p className={styles.socialmediabtn}>
        <a href={url} target="_blank">
          {name}
        </a>
      </p>
    </div>
  );
}

export default function Home() {
  const [hero, setHero] = useState(heroImage[0]);
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Fullstack Software Engineer"
    >
      <main>
        <section className={styles.features}>
          <div className={classnames("container", styles.containerpadding)}>
            <div className="row">
              <div className={classnames("col col--4", styles.introduction)}>
                <div>
                  <h1 className={styles.nomargin} style={{ fontWeight: 200 }}>
                    Hi I'm
                  </h1>
                  <h1
                    className={classnames("hero__title", styles.nomargin)}
                    style={{ fontSize: 70 }}
                  >
                    Abhin Pai
                  </h1>
                  <p className="hero__subtitle">Fullstack Software Engineer</p>
                  {/* <div className="row">
                    {socialMedia.map((item, index) => (
                      <ReachMe key={index} {...item} />
                    ))}
                  </div> */}
                </div>
              </div>
              <div className={classnames("col col--8", styles.feature, styles.hero)}>
                <div className="text--center">
                  <HeroImage imagename={hero}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const HeroImage = ({imagename}) => {
  return (
    <img
      className={styles.featureImage}
      src={"img/"+imagename}
      alt={"title"}
    />
  );
};
