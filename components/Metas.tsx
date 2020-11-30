import Head from "next/head";

export default function Metas({ title, description, image }: IMetas) {
  return (
    <Head>
      {title && (
        <>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
    </Head>
  );
}

interface IMetas {
  title?: string;
  description?: string;
  image?: string;
}
