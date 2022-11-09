import Head from "next/head";
import Header from "../components/Header/index";
import TypeText from "../components/TypeText/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Website</title>
        <meta name="personal website" content="personal website" />
      </Head>
      <Header />
      <TypeText />
      <footer></footer>
    </>
  );
}
