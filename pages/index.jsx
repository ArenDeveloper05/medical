import HomeDirector from "../src/components/home/HomeDirector";
import HomeNews from "../src/components/home/HomeNews";
import HomeDoctors from "../src/components/home/HomeDoctors";
import HomeGallery from "../src/components/home/HomeGallery";
import HomeSlider from "../src/components/home/HomeSlider";
import Layout from "../src/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <HomeSlider />
      <HomeDirector />
      <HomeNews />
      <HomeDoctors />
      <HomeGallery />
    </Layout>
  );
};

export default Home;
