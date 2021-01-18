import { useRouter } from "next/router";
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
    name: "John Letey",
    title: "Chief Technology Officer",
    img: "/john.jpeg",
    link: "https://twitter.com/johnletey",
  },
  {
    name: "Marton Lederer",
    title: "Frontend Developer",
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
];

const aboutCards = [];

export default function Home() {
  const router = useRouter();
  for (let i = 0; i < people.length; i++) {
    aboutCards.push(
      <Grid xs={24} sm={24} md={12} lg={12} xl={8}>
        <Card
          design="Geist"
          className={styles.aboutCard}
          hoverable
          onClick={() => {
            router.push(people[i].link);
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
      <Metas
        title="th8ta"
        description="Building from all angles"
        image="/favicon.png"
      />
      <Nav />
      <VertoProvider>
        <Page>
          <div className={styles.Hero} style={{ marginTop: "2.3em" }}>
            <iframe
              src="https://my.spline.design/deviceiphone12-f8b7820e686be2d0b1b63f9b8949e034/"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <h1 className={styles.title}>Ventures</h1>
          <Card
            style={{ marginBottom: "1em", cursor: "pointer" }}
            className={styles.testToken}
            hoverable
            shadow
            onClick={() => {
              router.push("https://verto.exchange");
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
          <h1 className={styles.title}>Who we are</h1>
          <Grid.Container gap={2}>{aboutCards}</Grid.Container>
        </Page>
        <Footer />
      </VertoProvider>
    </>
  );
}
