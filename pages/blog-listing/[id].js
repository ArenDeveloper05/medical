import Layouts from "../../src/layout/Layouts";
import PageBanner from "../../src/layout/PageBanner";
import SinglePostBlogPage from "../../src/components/Single-post/SinglePostBlogPage"

const BlogPost = () => {
    return (
        <Layouts>
            <h1>This is a single post for future changing</h1>
            <PageBanner
                pageTitle="5 Benefits of ..."
                url="blog-listing"
                motherTitle="Our Blog"
            />
            <SinglePostBlogPage />
        </Layouts>
    );
};

export default BlogPost;