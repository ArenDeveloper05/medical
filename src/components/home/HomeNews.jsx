import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "../adminPanel/Loader";
import { generateLanguage } from "../../utils";
import useTranslation from "next-translate/useTranslation";
import { APIUrl, getPaginatedNews } from "../../DataServices";

const HomeNews = () => {
  const [newsData, setNewsData] = useState("");
  const [newsDataError, setNewsDataError] = useState(false);
  const [newsDataLoading, setNewsDataLoading] = useState(false);
  const { t, lang } = useTranslation("common");

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
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            <h3 className="h3-md steelblue-color">
              Our Stories, Tips &amp; Latest News
            </h3>
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero at tempus, blandit posuere ligula varius congue
              cursus porta feugiat
            </p>
          </div>
        </div>
        <div className="row home-news">
          {newsDataLoading && <Loader></Loader>}
          {!newsDataLoading &&
            newsData &&
            newsData.map(({ ID, ImageURL, CreatedAt, Title, TextShort }) => {
              return (
                <div
                  className="blog-post wow fadeInUp news-cards"
                  data-wow-delay="0.4s"
                  key={ID && ID}
                >
                  <div className="blog-post-img">
                    {ImageURL !== null ? (
                      <Image
                        className="img-fluid"
                        crossOrigin="anonymous"
                        loader={() => `${APIUrl}/images/doctors/${ImageURL}`}
                        src={`${APIUrl}/images/doctors/${ImageURL}`}
                        alt={`${Title ? Title : ""}`}
                        layout="responsive"
                        objectFit="cover"
                        width={"100%"}
                        height={"100%"}
                      />
                    ) : (
                      <Image
                        className="img-fluid card-appear"
                        src={`/images/no-image.jpg`}
                        alt="doctor-foto"
                        layout="responsive"
                        objectFit="cover"
                        width={"100%"}
                        height={"100%"}
                      />
                    )}
                  </div>
                  <div className="blog-post-txt">
                    <h5 className="h5-sm steelblue-color">
                      <Link href={`/blog-listing/${ID}?id=${ID}`}>
                        <a>{Title && Title}</a>
                      </Link>
                    </h5>
                    <span>{CreatedAt.slice(0, 10)}</span>
                    <p>{TextShort && TextShort}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div
              className="all-posts-btn mb-40 wow fadeInUp"
              data-wow-delay="1s"
            >
              <Link href="/blog-listing">
                <a className="btn btn-blue blue-hover more-news-button">
                  {t("button-more")}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
