import type { NextPage } from "next";
import Head from "next/head";
import { FractionNftsViews } from "../views/fraction-nfts";

const FractionNfts: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>About Fractions</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <FractionNftsViews />
    </div>
  );
};

export default FractionNfts;
