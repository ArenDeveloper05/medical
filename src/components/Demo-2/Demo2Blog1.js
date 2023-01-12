import Link from "next/link";
import React from "react";
import { useState,useEffect } from "react";
import Image from "next/image";
import Loader from "../adminPanel/Loader";
import { generateLanguage } from "../../utils";
import useTranslation from "next-translate/useTranslation";
import { getPaginatedNews } from "../../DataServices";

const Demo2Blog1 = () => {
    const [newsData,setNewsData] = useState("");
    const [newsDataError, setNewsDataError] = useState(false);
    const [newsDataLoading, setNewsDataLoading] = useState(false);
    const {lang } = useTranslation('common');

    useEffect(() => {
        async function getNews() {
          setNewsDataLoading(true);
          try {
            const {
              data: { data },
            } = await getPaginatedNews(generateLanguage(lang), 3, 1);
            setNewsData(data[0]);
            newsDataError && setNewsDataError(false);
          } catch (error) {
            setNewsDataError(true);
          }
          setNewsDataLoading(false);
        }
        getNews();
      }, []);
    
    return (
        <section id="blog-1" className="wide-60 blog-section division home-news">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Title 	*/}
                        <h3 className="h3-md steelblue-color">
                            Our Stories, Tips &amp; Latest News
                        </h3>
                        {/* Text */}
                        <p>
                            Aliquam a augue suscipit, luctus neque purus ipsum
                            neque dolor primis libero at tempus, blandit posuere
                            ligula varius congue cursus porta feugiat
                        </p>
                    </div>
                </div>
                {/* BLOG POSTS HOLDER */}
                <div className="row home-news">
                    {/* BLOG POST #1 */}
                    {newsDataLoading && <Loader></Loader>}
                {!newsDataLoading && newsData && newsData.map(({
                  ID,
                  ImageURL,
                  CreatedAt,
                  Title,
                  TextShort}) => {
                return(
                    <div
                            className="blog-post wow fadeInUp news-cards"
                            data-wow-delay="0.4s"
                            key = {ID && ID}
                        >
                            {/* BLOG POST IMAGE */}
                            <div className="blog-post-img">
                            <Image
                                className="img-fluid"
                                // src= {"/" + ImageURL}
                                src = "/images/image-07.png"
                                alt="newsImage"
                                layout="responsive"
                                objectFit="contain"
                                width={"100%"}
                                height={"100%"}
                            />
                            </div>
                            {/* BLOG POST TITLE */}
                            <div className="blog-post-txt">
                                {/* Post Title */}
                                <h5 className="h5-sm steelblue-color">
                                    <Link href={`/blog-listing/${ID}?id=${ID}`}>
                                        <a>
                                            {Title && Title}
                                        </a>
                                    </Link>
                                </h5>
                                {/* Post Data */}
                                <span>
                                   {CreatedAt.slice(0, 10)}
                                </span>
                                {/* Post Text */}
                                <p>
                                   {TextShort && TextShort}
                                </p>
                            </div>
                        </div>
                )
            }
            )}    
                    {/* END  BLOG POST #1 */}
                </div>
                {/* END BLOG POSTS HOLDER */}
                {/* ALL POSTS BUTTON */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div
                            className="all-posts-btn mb-40 wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <Link href="/blog-listing">
                                <a className="btn btn-blue blue-hover more-news-button">
                                    Read More Posts
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo2Blog1;
