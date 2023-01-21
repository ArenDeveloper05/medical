import Layout from "../../src/layout/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { getSingleNews } from "../../src/DataServices";
import useTranslation from "next-translate/useTranslation";
import PageBanner from "../../src/layout/PageBanner";
import SinglePostBlogPage from "../../src/components/Single-post/SinglePostBlogPage";
import { generateLanguage } from "../../src/utils";

const BlogPost = () => {
  const [singleNews, setSingleNews] = useState("");
  const { lang } = useTranslation("common");
  const router = useRouter();

  const fetchData = useCallback(async () => {
    const {
      data: { data },
    } = await getSingleNews(generateLanguage(lang), router.query.id);
    setSingleNews(data[0][0]);
  }, [lang, router.query.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Layout>
      <PageBanner
        pageTitle={singleNews && singleNews.Title}
        url="blog-listing"
        motherTitle="Our Blog"
      />
      <SinglePostBlogPage
        image={singleNews && singleNews.ImageURL}
        createdTime={singleNews.CreatedAt && singleNews.CreatedAt.slice(0, 10)}
        updatedTime={singleNews.UpdatedAt && singleNews.UpdatedAt.slice(0, 10)}
        title={singleNews.Title}
        text={singleNews && singleNews.Text}
      />
    </Layout>
  );
};

export default BlogPost;
