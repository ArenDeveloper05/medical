import About5 from "../src/components/Common/About-5";
import Demo2Blog1 from "../src/components/Demo-2/Demo2Blog1";
import Demo2Doctors1 from "../src/components/Demo-2/Demo2Doctors1";
import Demo2Gallery1 from "../src/components/Demo-2/Demo2Gallery1";
import Demo2Hero2 from "../src/components/Demo-2/Demo2Hero2";
import Layout from "../src/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Demo2Hero2 />
      <About5 />
      <Demo2Blog1 />
      <Demo2Doctors1 />
      <Demo2Gallery1 />
    </Layout>
  );
};

export default Home;
