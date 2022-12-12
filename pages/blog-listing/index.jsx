

import useTranslation from "next-translate/useTranslation";
import BlogPage from "../../src/components/Blog-listing/BlogPage";
import Layouts from "../../src/layout/Layouts";
import PageBanner from "../../src/layout/PageBanner";

const BlogListing = () => {
  const { t } = useTranslation('common');
  return (
    <Layouts>
      <PageBanner pageTitle={t("news.page-banner-title")}/>
      <BlogPage />
    </Layouts>
  );
};

export default BlogListing;
