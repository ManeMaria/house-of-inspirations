import { NextPage } from 'next';
import { Banner } from '../components/Banner';
import { Layout } from '../components/layout';
import { ListCards } from '../components/ListCards';
import { SectionWrapper } from '../components/SectionWrapper';

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
      <SectionWrapper>
        <ListCards />
      </SectionWrapper>
    </Layout>
  );
};

export default Home;
