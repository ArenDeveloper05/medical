import FaqsPage from "../src/components/Faqs/FaqsPage";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Faqs = () => {
  return (
    <Layout>
      <PageBanner pageTitle="FAQs" />
      <FaqsPage />
    </Layout>
  );
};

export default Faqs;
