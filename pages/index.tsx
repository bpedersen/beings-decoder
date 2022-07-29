import Head from "next/head";
import { Root } from "../components/Root/Root";

export default function Home() {
  return (
    <div style={{ height: "200vh" }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Boogaloo&Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Root />
    </div>
  );
}
