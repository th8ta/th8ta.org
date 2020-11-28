import Head from "next/head"
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>th8ta</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
        <script src="https://www.openprocessing.org/openprocessing_sketch.js"></script>
        <script src="bg.js" />
      </Head>
      <div id="main-text">
      <div className="hero is-fullheight-with-navbar">
        <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item" href="/">
                    <img className="logo" src="/logo_white.svg" />
                  </a>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item" href="/blog" id="blog-text">
                      Bl0g
                    </a>
                  </div>
                </div>
              </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered" id="main-text">
              th8ta
            </h1>
          </div>
        </div>
      </div></div>
      <style jsx>{`
        html, body {
          overflow: auto;
        }

        ::selection {
          text-shadow: none;
          background: #000;
          color: #fff;
        }

        h1.title {
          font-size: 15em;
          font-weight: 700;
          color: black;
        }

        .navbar-item {
          padding: 20px;
          color: white;
        }

        #blog-text:hover {
          color: white !important;
          background: none !important;
        }

        .logo {
          width: 28px;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default Home;