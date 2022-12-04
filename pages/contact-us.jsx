import Contacts1 from "../src/components/Contacts-1/Contacts1";
import Layout from "../src/layout/Layout";

const Contacts1_ = () => {
  return (
    <Layout>
      <Contacts1 />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1529.1606027852522!2d44.534609342567904!3d39.95657071004019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406acd79a7ae93f1%3A0xda3e028297c862b2!2z0KbQtdC90YLRgNCw0LvRjNC90LDRjyDQsdC-0LvRjNC90LjRhtCw!5e0!3m2!1sru!2s!4v1664809080926!5m2!1sru!2s"
        height={450}
        width="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </Layout>
  );
};

export default Contacts1_;
