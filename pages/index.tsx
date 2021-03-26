import Head from "next/head";
import Metas from "../components/Metas";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.sass";
import { VertoProvider, Page, Card } from "@verto/ui";
import { Grid } from "@geist-ui/react";

const people = [
  {
    name: "Tate Berenbaum",
    title: "Chief Executive Officer",
    img: "/tate.jpeg",
    link: "https://twitter.com/TateBerenbaum",
  },
  {
    name: "Marton Lederer",
    title: "Frontend & Mobile Developer",
    img: "/marton.jpeg",
    link: "https://twitter.com/martonlederer",
  },
  {
    name: "Fabian Riewe",
    title: "Blockchain Developer",
    img: "/fabian.jpeg",
    link: "https://twitter.com/RieweFabian",
  },
  {
    name: "Maximous Black",
    title: "User Experience Designer",
    img: "/max.jpeg",
    link: "https://twitter.com/maximousblk",
  },
  {
    name: "Divy Srivastava",
    title: "Backend Developer",
    img: "/divy.jpeg",
    link: "https://twitter.com/undefined_void",
  },
  {
    name: "John Letey",
    title: "Consultant",
    img: "/john.jpeg",
    link: "https://twitter.com/johnletey",
  },
];

const aboutCards = [];

export default function Home() {
  for (let i = 0; i < people.length; i++) {
    aboutCards.push(
      <Grid xs={24} sm={24} md={12} lg={12} xl={8}>
        <Card
          design="Geist"
          className={styles.aboutCard}
          hoverable
          onClick={() => {
            window.open(people[i].link, "_blank");
          }}
          key={i}
        >
          <div className={styles.image}>
            <img src={people[i].img} draggable={false} height="50px" />
            <div className={styles.body}>
              <h4>{people[i].name}</h4>
              <p>{people[i].title}</p>
            </div>
          </div>
        </Card>
      </Grid>
    );
  }

  return (
    <>
      <Head>
        <title>th8ta</title>
      </Head>
      <Metas />
      <Nav />
      <VertoProvider>
        <Page>
          <h1 className={styles.title}>Ventures</h1>
          <Card
            style={{ marginBottom: "1em", cursor: "pointer" }}
            className={styles.testToken}
            hoverable
            shadow
            onClick={() => {
              window.open("https://verto.exchange", "_blank");
            }}
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
          <Card
            style={{ marginBottom: "1em", cursor: "pointer" }}
            className={styles.testToken}
            hoverable
            shadow
            onClick={() => {
              window.open(
                "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap",
                "_blank"
              );
            }}
          >
            <h1 className={styles.code}>EXT</h1>
            <div className={styles.info}>
              <h4 className={styles.code}>
                <span>[Wallet]</span>ArConnect
              </h4>
              <p className={styles.code}>
                <span>INFO:</span>A browser extension to securely manage your
                Arweave assets
              </p>
            </div>
          </Card>
          <Card
            style={{ marginBottom: "1em", cursor: "pointer" }}
            className={styles.testToken}
            hoverable
            shadow
          >
            <h1 className={styles.code}>APP</h1>
            <div className={styles.info}>
              <h4 className={styles.code}>
                <span>[Coming]</span>Vallo
              </h4>
              <p className={styles.code}>
                <span>INFO:</span>A simple & intuitive way for anyone to manage
                their Arweave tokens
              </p>
            </div>
          </Card>
          <h1 className={styles.title}>Who we are</h1>
          <Grid.Container gap={2}>{aboutCards}</Grid.Container>
        </Page>
        <Footer />
      </VertoProvider>
    </>
  );
}
