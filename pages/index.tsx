import Head from "next/head";
import Metas from "../components/Metas";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.sass";

export default function Home() {
  return (
    <>
      <Head>
        <title>th8ta</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
        <script src="https://www.openprocessing.org/openprocessing_sketch.js"></script>
        <script src="/bg.js" />
      </Head>
      <Metas
        title="Th8ta"
        description="Building from all angles"
        image="/favicon.png"
      />
      <Nav />
      <div className={styles.Landing}>
        <h1>
          th<span>8</span>ta
        </h1>
      </div>
    </>
  );
}
