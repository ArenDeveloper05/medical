import SinglePostBlogPage from "../src/components/Single-post/SinglePostBlogPage";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const SinglePost = () => {
  return (
    <Layout>
      <PageBanner
        pageTitle="5 Benefits of ..."
        url="blog-listing"
        motherTitle="Our Blog
"
      />
      <SinglePostBlogPage />
    </Layout>
  );
};

export default SinglePost;
