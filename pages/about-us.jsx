import AboutUsInfo from "../src/components/About-us/AboutUsInfo"
import Banner5 from "../src/components/Common/Banner-5";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const AboutUs = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="About Us" />
      <AboutUsInfo/>
      <Banner5 />
    </Layouts>
  );
};

export default AboutUs;
