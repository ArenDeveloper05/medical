import Link from "next/link";
import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const SinglePostBlogPage = ({title,createdTime,updatedTime,text,image }) => {
  const { t } = useTranslation('common');
  return (
    <div id="single-blog-page" className="wide-100 blog-page-section division">
      <div className="container">
        <div className="row justify-content-center">
          {/* SINGLE POST */}
          <div className="col-lg-8">
            <div className="single-blog-post pr-30">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img mb-40">
                <Image
                className="img-fluid"
                src = {"/" + image}
                alt="news-photo"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"100%"}
              />
              </div>
              {/* BLOG POST TEXT */}
              <div className="sblog-post-txt">
                {/* Post Title */}
                <h4 className="h4-lg steelblue-color">
                  {title}
                </h4>
                {/* Post Data */}
                <div style={{display:"flex"}}>
                <span>
                <h6>{t("news.singleNews.createdAt")}</h6>
                  {createdTime}
                </span>
                <span style={{marginLeft:"50px"}}>
                <h6>{updatedTime !== createdTime ?t("news.singleNews.updatedAt"):t("news.singleNews.notUpdated")}</h6>
                  {updatedTime !== createdTime ?updatedTime:""}
                </span>
                </div>
                {/* Post Text */}
                <p className="mt-30">
              {text}
                </p>
              </div>
            </div>
          </div>
          {/* END SINGLE POST */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default SinglePostBlogPage;
