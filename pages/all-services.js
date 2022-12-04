import AllServicesTabs2 from "../src/components/All-services/AllServicesTabs2";
import AllServicesTestimonials2 from "../src/components/All-services/AllServicesTestimonials2";
import Banner5 from "../src/components/Common/Banner-5";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const AllServices = () => {
  return (
    <Layout>
      <PageBanner pageTitle="Our Services" />
      <AllServicesTabs2 />
      <Banner5 />
    </Layout>
  );
};

export default AllServices;
