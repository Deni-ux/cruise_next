import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Hero, About } from "../components";
import { data } from "../data";

export default function Home({ cruises }) {
  console.log(cruises);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Kind of Cruise</title>
        <meta
          name="description"
          content="The My Kind of Cruise app helps you find, compare and even book a cruise, all in one easy place.
You are 100% financially protected, as we are part of The Travel Trust Association
"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About cruises={cruises} />
    </div>
  );
}

export const getStaticProps = async () => {
  const cruises = data;
  return {
    props: {
      cruises,
    },
  };
};
