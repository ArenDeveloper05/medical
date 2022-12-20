import Service1Doctors1 from "../src/components/Service-1/Service1Doctors1";
import Service1Page from "../src/components/Service-1/Service1Page";
import Service1Reviews2 from "../src/components/Service-1/Service1Reviews2";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Service1 = () => {
  return (
    <Layout>
      <PageBanner
        pageTitle="Service Single #1"
        motherTitle="Our Services"
        url="all-services"
      />
      <Service1Page />
      <Service1Reviews2 />
      <Service1Doctors1 />
    </Layout>
  );
};

export default Service1;
