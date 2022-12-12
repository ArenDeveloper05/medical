import Layouts from "../../src/layout/Layouts";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import { useCallback } from "react";
import { getSingleNews } from "../../src/DataServices";
import { generateLanguage } from "../../src/utils";
import useTranslation from "next-translate/useTranslation";
import PageBanner from "../../src/layout/PageBanner";
import SinglePostBlogPage from "../../src/components/Single-post/SinglePostBlogPage";

const BlogPost = () => {
    const [singleNews, setSingleNews] = useState("");
    const { lang } = useTranslation('common');
    const router= useRouter();

    const fetchData = useCallback(async ()=>{
        const {data : {data}} = await getSingleNews(generateLanguage(lang),router.query.id)
        setSingleNews(data[0][0])
    },[lang,router.query.id])

    useEffect(()=>{
        fetchData()
      },[fetchData])
    
    return (
        <Layouts>
            <PageBanner
                pageTitle= { singleNews && singleNews.Title}
                url="blog-listing"
                motherTitle="Our Blog"
            />
            <SinglePostBlogPage
                image = {singleNews && singleNews.ImageURL} 
                createdTime =  {singleNews.CreatedAt && singleNews.CreatedAt.slice(0, 10)}
                updatedTime =  {singleNews.UpdatedAt && singleNews.UpdatedAt.slice(0, 10)}
                text = {singleNews && singleNews.Text}
                />
        </Layouts>
    );
};

export default BlogPost;