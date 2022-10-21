import Link from "next/link";
import { useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils";
import Popup from "../Popup";
import useTranslation from "next-translate/useTranslation";

const newsData = [
  {
    id: 1,
    popular: false,
    img: "images/blog/post-4-img.jpg",
    title: "5 Benefits Of Integrative Medicine",
    data: "May 03, 2019",
    text: " Donec sodales, nibh vel tristique aliquet, nisi liberosuscipit diam, sed tempus ante nulla ut purus. Donec dolormagna, suscipit in magna dignissim, porttitor hendrerit.gravida ultrices felis ..."
  },
  {
    id: 2,
    popular: true,
    img: "images/blog/post-5-img.jpg",
    title: "How Weather Impacts Your Health",
    data: "Apr 17, 2019",
    text: " Donec sodales, nibh vel tristique aliquet, nisi liberosuscipit diam, sed tempus ante nulla ut purus. Donec dolormagna, suscipit in magna dignissim, porttitor hendrerit.gravida ultrices felis ..."
  },
  {
    id: 3,
    popular: true,
    img: "images/blog/post-6-img.jpg",
    title: "HYour Health Is In Your Hands",
    data: "Apr 28, 2019",
    text: " Donec sodales, nibh vel tristique aliquet, nisi liberosuscipit diam, sed tempus ante nulla ut purus. Donec dolormagna, suscipit in magna dignissim, porttitor hendrerit.gravida ultrices felis ..."
  },
  {
    id:4,
    popular: true,
    img: "images/blog/post-6-img.jpg",
    title: "20 Years of Caring. 15 Fact About MedService,Melbourne's First Choice for Healthcare",
    data: "Apr 17, 2019",
    text: " Donec sodales, nibh vel tristique aliquet, nisi liberosuscipit diam, sed tempus ante nulla ut purus. Donec dolormagna, suscipit in magna dignissim, porttitor hendrerit.gravida ultrices felis ..."
  },
];

const popularData = [
  {
    id:1,
    img: "images/blog/latest-post-1.jpg",
    title: "Title",
    desc: "Etiam sapien accumsan molestie ante empor ..."
  },
  {
    id:2,
    img: "images/blog/latest-post-2.jpg",
    title: "Title",
    desc: "Blandit tempor sapien ipsum, porta justo ..."
  },
  {
    id:3,
    img: "images/blog/latest-post-3.jpg",
    title: "Title",
    desc: "Cursus risus laoreet turpis auctor varius ..."
  },
]
const BlogPage = () => {
  const [video, setVideo] = useState(false);
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  const { t } = useTranslation('common');
  useEffect(() => {
    pagination(".blog-post", sort, active);
    let list = document.querySelectorAll(".blog-post");
    setstate(getPagination(list.length, sort));
  }, [active,sort]);
  return (
    <div id="blog-page" className="wide-100 blog-page-section division">
      {video && <Popup close={setVideo} />}
      <div className="container">
        <div className="row new-row">
          {/* BLOG POSTS HOLDER */}
          <div className="col-lg-12 ">
            <div id="posts" className="posts-holder pr-30 pr-31">
              {/* BLOG POST #1 */}
              <div className="posts-holder-pr-30-left">

                {newsData && newsData.map((item) => 
                   <div key ={item.id}className="blog-post">
                   {/* BLOG POST IMAGE */}
                   <div className="blog-post-img">
                     <img
                       className="img-fluid"
                       src={item.img}
                       alt="blog-post-image"
                     />
                   </div>
                   {/* BLOG POST TITLE */}
                   <div className="blog-post-txt">
                     {/* Post Title */}
                     <h5 className="h5-xl steelblue-color">
                       <Link href={`/blog-listing/${item.id}`}>
                         <a>{item.title}</a>
                       </Link>
                       {/* Testing single page routing */}
                     </h5>
                     {/* Post Data */}
                     <span>
                       {item.data}
                     </span>
                     {/* Post Text */}
                     <p>
                       {item.text}
                     </p>
                   </div>
                 </div>
                )}
            </div>
          {/* SIDEBAR */}
          <aside id="sidebar" className="col-lg-4">
             {/* POPULAR POSTS */}
             <div className="popular-posts sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-sm steelblue-color">{t("news.popularposts")}</h5>
              <ul className="popular-posts">
                  {popularData && popularData.map((item,idx) =>
                      <li 
                      key = {item.id}
                      className="clearfix d-flex align-items-center">
                      <img
                        className="img-fluid"
                        src={item.img}
                        alt="blog-post-preview"
                      />
                      <div className="post-summary">
                       <h5>{item.title}</h5>
                        <Link href={`/single-post ${item.id}`}>
                          <a>{item.desc}</a>
                        </Link>
                      </div>
                    </li>
                   )}
              </ul>
            </div>
            {/*END POPULAR POSTS */}
          </aside>

          {/* END SIDEBAR */}
            
            </div>
          {/* BLOG PAGE PAGINATION */}
          <div className="blog-page-pagination b-top">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center primary-theme">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(active === 1 ? 1 : active - 1);
                      }}
                      tabIndex={-1}
                    >
                      <i className="fas fa-long-arrow-alt-left" />
                    </a>
                  </li>
                  {state &&
                    state.map((s, i) => (
                      <li
                        className={`page-item  ${active == s ? "active" : ""
                          }`}
                        key={i}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setActive(s);
                          }}
                        >
                          {s}
                        </a>
                      </li>
                    ))}

                  <li className="page-item next-page">
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(
                          active === state.length ? state.length : active + 1
                        );
                      }}
                    >
                      <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/*END BLOG PAGE PAGINATION */}
          </div>
          {/* END BLOG POSTS HOLDER */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default BlogPage;
