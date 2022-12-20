import BlogPage from "../../src/components/Blog-listing/BlogPage";
import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";
import useTranslation from "next-translate/useTranslation";

const BlogListing = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <PageBanner pageTitle={t("news.page-banner-title")} />
      <BlogPage />
    </Layout>
  );
};

export default BlogListing;
