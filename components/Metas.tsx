import Head from "next/head";

export default function Metas() {
  return (
    <Head>
      <link rel="icon" href="/logo.svg" />
      <meta property="og:title" content="th8ta" />
      <meta property="og:description" content="Building from all angles." />
      <meta property="og:image" content="/og.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
