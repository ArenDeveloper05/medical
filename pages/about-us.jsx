import useTranslation from "next-translate/useTranslation";
import AboutUsInfo4 from "../src/components/About-us/AboutUsInfo";
import Banner5 from "../src/components/Common/Banner-5";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const AboutUs = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <PageBanner pageTitle={t("header-aboutus")} />
      <AboutUsInfo4 />
      <Banner5 />
    </Layout>
  );
};

export default AboutUs;
