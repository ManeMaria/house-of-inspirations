import { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
};

export default Home;
