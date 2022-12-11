import dynamic from "next/dynamic";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Gallery3 = dynamic(() => import("../src/components/Gallery/Gallery3"), {
  ssr: false,
});

const Gallery = () => {
  return (
    <Layout>
      <PageBanner pageTitle="Our Gallery" />
      <Gallery3 />
    </Layout>
  );
};

export default Gallery;
