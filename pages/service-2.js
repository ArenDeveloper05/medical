import Banner5 from "../src/components/Common/Banner-5";
import Service2Page from "../src/components/Service-2/Service2Page";
import Service2Reviews2 from "../src/components/Service-2/Service2Reviews2";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const singleService = () => {
  return (
    <Layout>
      <PageBanner
        pageTitle="Service Single #1"
        motherTitle="Our Services"
        url="all-services"
      />
      <Service2Page />
    </Layout>
  );
};

export default singleService;
