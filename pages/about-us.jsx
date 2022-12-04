import AboutUsInfo4 from "../src/components/About-us/AboutUsInfo4";
import AboutUsVideo2 from "../src/components/About-us/AboutUsVideo2";
import Banner5 from "../src/components/Common/Banner-5";
import Services7 from "../src/components/Common/Services-7";
import Statistic1 from "../src/components/Common/Statistic-1";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const AboutUs = () => {
  return (
    <Layout>
      <PageBanner pageTitle="About Us" />
      <AboutUsInfo4 />
      <Banner5 />
    </Layout>
  );
};

export default AboutUs;
