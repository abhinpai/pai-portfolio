import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Contact() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { title, tagline } = siteConfig;
  return (
    <Layout title="Contact">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          <div>{`${title} · ${tagline}`}</div> Edit{" "}
          <code>pages/contact.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Contact;
