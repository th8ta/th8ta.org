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
          <div className={styles.Hero}>
            <iframe
              src="https://my.spline.design/deviceiphone12-f8b7820e686be2d0b1b63f9b8949e034/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <h1 className={styles.title}>Ventures</h1>
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
                <span>[PSC]</span>Verto
              </h4>
              <p className={styles.code}>
                <span>ID:</span>usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A
              </p>
            </div>
          </Card>
          <h1 className={styles.title}>About us</h1>
        </Page>
      </VertoProvider>
    </>
  );
}
