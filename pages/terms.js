import TermsPage from "../src/components/Terms/TermsPage";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Terms = () => {
  return (
    <Layout>
      <PageBanner pageTitle="Terms & Privacy" />
      <TermsPage />
    </Layout>
  );
};

export default Terms;
