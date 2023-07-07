import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>PIXSELLS MISSIONS</title>
        <meta
          name="description"
          content="PIXSELLS MISSIONS"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
