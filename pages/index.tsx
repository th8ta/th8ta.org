import Head from "next/head";
import Metas from "../components/Metas";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.sass";
import { VertoProvider, Page, Card } from "@verto/ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>th8ta</title>
      </Head>
      <Metas
        title="Th8ta"
        description="Building from all angles"
        image="/favicon.png"
      />
      <Nav />
      <VertoProvider>
        <Page>
          <h3>Building from all angles.</h3>
          <div className={styles.Hero}></div>
          <h1>Ventures</h1>
          <Card
            style={{ marginBottom: "1em" }}
            className={styles.testToken}
            hoverable
            shadow
            onClick={() => (window.location.href = "https://verto.exchange")}
          >
            <h1 className={styles.code}>VRT</h1>
            <div className={styles.info}>
              <h4 className={styles.code}>
                <span>[PST]</span>Verto
              </h4>
              <p className={styles.code}>
                <span>ID:</span>usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A
              </p>
            </div>
          </Card>
          <h1>About us</h1>
        </Page>
      </VertoProvider>
    </>
  );
}
