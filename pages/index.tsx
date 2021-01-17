import { useRouter } from "next/router";
import Head from "next/head";
import Metas from "../components/Metas";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.sass";
import { VertoProvider, Page, Card } from "@verto/ui";

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
    link: "https://twitter.com/martonlederer",
  },
  {
    name: "Maximous Black",
    title: "User Experience Designer",
    img: "/max.jpeg",
    link: "https://twitter.com/martonlederer",
  },
];

export default function Home() {
  const router = useRouter();

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
          <h1 className={styles.title}>Who We Are</h1>
          <div
            style={{ display: "grid", gridGap: "25px", alignItems: "center" }}
          >
            <Card
              style={{
                marginBottom: "1em",
                cursor: "pointer",
                gridRowStart: 1,
                gridColumnStart: 1,
              }}
              design="Geist"
              hoverable
              shadow
              onClick={() => {
                router.push(people[0].link);
              }}
            >
              <img
                src={people[0].img}
                height="50px"
                style={{ borderRadius: "50%" }}
              />
              <h4>{people[0].name}</h4>
              <p>{people[0].title}</p>
            </Card>
            <Card
              style={{
                marginBottom: "1em",
                cursor: "pointer",
                gridRowStart: 1,
                gridColumnStart: 2,
              }}
              design="Geist"
              hoverable
              shadow
              onClick={() => {
                router.push(people[1].link);
              }}
            >
              <img
                src={people[1].img}
                height="50px"
                style={{ borderRadius: "50%" }}
              />
              <h4>{people[1].name}</h4>
              <p>{people[1].title}</p>
            </Card>
            <Card
              style={{
                marginBottom: "1em",
                cursor: "pointer",
                gridRowStart: 2,
                gridColumnStart: 1,
              }}
              design="Geist"
              hoverable
              shadow
              onClick={() => {
                router.push(people[2].link);
              }}
            >
              <img
                src={people[2].img}
                height="50px"
                style={{ borderRadius: "50%" }}
              />
              <h4>{people[2].name}</h4>
              <p>{people[2].title}</p>
            </Card>
            <Card
              style={{
                marginBottom: "1em",
                cursor: "pointer",
                gridRowStart: 2,
                gridColumnStart: 2,
              }}
              design="Geist"
              hoverable
              shadow
              onClick={() => {
                router.push(people[3].link);
              }}
            >
              <img
                src={people[3].img}
                height="50px"
                style={{ borderRadius: "50%" }}
              />
              <h4>{people[3].name}</h4>
              <p>{people[3].title}</p>
            </Card>
            <Card
              style={{
                marginBottom: "1em",
                cursor: "pointer",
                gridRowStart: 3,
                gridColumnStart: 1,
              }}
              design="Geist"
              hoverable
              shadow
              onClick={() => {
                router.push(people[4].link);
              }}
            >
              <img
                src={people[4].img}
                height="50px"
                style={{ borderRadius: "50%" }}
              />
              <h4>{people[4].name}</h4>
              <p>{people[4].title}</p>
            </Card>
          </div>
        </Page>
      </VertoProvider>
    </>
  );
}
