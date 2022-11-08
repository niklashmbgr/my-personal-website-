import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Website</title>
        <meta name="personal website" content="personal website" />
      </Head>
      <Header />
      <footer></footer>
    </>
  );
}
