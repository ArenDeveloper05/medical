import Contacts02 from "../src/components/Contacts-2/Contacts02";
import ContactsBanner8 from "../src/components/Contacts-2/ContactsBanner8";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Contacts2 = () => {
  return (
    <Layout>
      <PageBanner pageTitle="Contact Us" />
      <Contacts02 />
      <ContactsBanner8 />
    </Layout>
  );
};

export default Contacts2;
