import AboutUsInfo4 from "../src/components/About-us/AboutUsInfo4";
import Banner5 from "../src/components/Common/Banner-5";
import Layout from "../src/layout/Layout"
import PageBanner from "../src/layout/PageBanner";

const AboutUs = () => {
  return (
    <Layout>
      <PageBanner pageTitle="About Us" />
      <AboutUsInfo4/>
      <Banner5 />
    </Layout>
  );
};

export default AboutUs;
