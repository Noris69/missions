import type { NextPage } from "next";
import Head from "next/head";
import { AboutPixsellsViews } from "../views/about-pixsells";

const AboutPixsells: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>About PIXSELLS</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <AboutPixsellsViews />
    </div>
  );
};

export default AboutPixsells;
