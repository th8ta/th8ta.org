import Head from "next/head";
import Metas from "../components/Metas";
import styles from "../styles/Home.module.sass";

export default function Home() {
  return (
    <>
      <Head>
        <title>Th8ta</title>
      </Head>
      <Metas
        title="Th8ta"
        description="Building from all angles"
        image="/favicon.png"
      />
      <div className={styles.Landing}>
        <h1>
          th<span>8</span>ta
        </h1>
      </div>
    </>
  );
}
