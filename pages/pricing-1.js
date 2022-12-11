import Banner5 from "../src/components/Common/Banner-5";
import Pricing1Pricing1 from "../src/components/Pricing-1/Pricing1Pricing1";
import Pricing1Pricing2 from "../src/components/Pricing-1/Pricing1Pricing2";
import Pricing1reviews2 from "../src/components/Pricing-1/Pricing1reviews2";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Pricing1 = () => {
  return (
    <Layout>
      <PageBanner pageTitle="Our Pricing" />
      {/* END BREADCRUMB */}
      {/* PRICING-1
			============================================= */}
      <Pricing1Pricing1 />
      {/* END PRICING-1 */}
      {/* PRICING-2
			============================================= */}
      <Pricing1Pricing2 />
      {/* END PRICING-2 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Pricing1reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* BANNER-5
			============================================= */}
      <Banner5 />
    </Layout>
  );
};

export default Pricing1;
