import React from "react";
import Layout from "@theme/Layout";
import styles from './style.module.css';

export default function About() {
  return (
    <Layout title="About">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p className={"message"} align='center'>
         Hold tight this page is under construction
        </p>
      </div>
    </Layout>
  );
}
