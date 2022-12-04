import Doctor2Details from "../src/components/Doctor-2/Doctor2Details";
import Doctor2Reviews2 from "../src/components/Doctor-2/Doctor2Reviews2";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Doctor2 = () => {
  return (
    <Layout>
      <PageBanner
        pageTitle="Doctor Page"
        motherTitle="Our Doctors"
        url="all-doctors"
      />

      <Doctor2Details />
      <Doctor2Reviews2 />
    </Layout>
  );
};

export default Doctor2;
