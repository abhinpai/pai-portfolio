import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

const heroImage = ["hero_new.svg", "hero.svg"];

export default function Home() {
  let interval = null;
  const [currentImageIndex, setIndex] = useState(0);
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  useEffect(() => {
    interval = setInterval(() => {
      currentImageIndex === 0 ? setIndex(1) : setIndex(0);
    }, 10000);
    () => clearInterval(interval);
  },[interval]);

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
                </div>
              </div>
              <div
                className={classnames(
                  "col col--8",
                  styles.feature,
                  styles.hero
                )}
              >
                <div className="text--center">
                  <HeroImage imageName={heroImage[currentImageIndex]} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const HeroImage = ({ imageName }) => {
  return (
    <img
      className={styles.featureImage}
      src={"img/" + imageName}
      alt={"title"}
    />
  );
};
