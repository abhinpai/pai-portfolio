import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

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
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Fullstack Software Engineer"
    >
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={classnames("col col--4", styles.introduction)}>
                <div>
                  <h1 className={styles.nomargin} style={{ fontWeight: 200 }}>
                    Hi I'm
                  </h1>
                  <h1
                    className={classnames("hero__title", styles.nomargin)}
                    style={{ fontSize: 80 }}
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
              <div className={classnames("col col--8", styles.feature)}>
                <div className="text--center">
                  <img
                    className={styles.featureImage}
                    src={"img/undraw_docusaurus_mountain.svg"}
                    alt={"title"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

