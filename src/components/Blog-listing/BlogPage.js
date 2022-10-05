import Link from "next/link";
import { useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils";
import Popup from "../Popup";

const BlogPage = () => {
  const [video, setVideo] = useState(false);
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".blog-post", sort, active);
    let list = document.querySelectorAll(".blog-post");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <div id="blog-page" className="wide-100 blog-page-section division">
      {video && <Popup close={setVideo} />}
      <div className="container">
        <div className="row">
          {/* BLOG POSTS HOLDER */}
          <div className="col-lg-12 ">
            <div id="posts" className="posts-holder pr-30 d-flex flex-wrap justify-content-between">
              {/* BLOG POST #1 */}
              <div className="blog-post">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img">
                  <img
                    className="img-fluid"
                    src="images/blog/post-4-img.jpg"
                    alt="blog-post-image"
                  />
                </div>
                {/* BLOG POST TITLE */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-xl steelblue-color">
                    <Link href={`/blog-listing/${1}`}>
                      <a>5 Benefits Of Integrative Medicine</a>
                    </Link>
                    {/* Testing single page routing */}
                  </h5>
                  {/* Post Data */}
                  <span>
                    May 03, 2019 by
                    <span>Dr.Jeremy Smith</span>
                  </span>
                  {/* Post Text */}
                  <p>
                    Donec sodales, nibh vel tristique aliquet, nisi libero
                    suscipit diam, sed tempus ante nulla ut purus. Donec dolor
                    magna, suscipit in magna dignissim, porttitor hendrerit.
                    gravida ultrices felis ...
                  </p>
                </div>
              </div>
              {/* END BLOG POST #1 */}
              {/* BLOG POST #2 */}
              <div className="blog-post">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img">
                  <div className="video-preview text-center">
                    {/* Change the link HERE!!! */}
                    <Link href="#">
                      <a
                        className="video-popup1"
                        href="#"
                        onClick={() => setVideo(true)}
                      >
                        {/* Play Icon */}
                        <div className="video-btn play-icon-blue">
                          <div className="video-block-wrapper">
                            <i className="fas fa-play" />
                          </div>
                        </div>
                        {/* Preview Image */}
                        <img
                          className="img-fluid"
                          src="images/blog/post-5-img.jpg"
                          alt="blog-post-image"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                {/* BLOG POST TEXT */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-xl steelblue-color">
                    <Link href="/single-post">
                      <a>How Weather Impacts Your Health</a>
                    </Link>
                  </h5>
                  {/* Post Data */}
                  <span>
                    Apr 17, 2019 by
                    <span>Dr.Megan Coleman</span>
                  </span>
                  {/* Post Text */}
                  <p>
                    Donec dolor magna, suscipit in magna dignissim, porttitor
                    hendrerit diam. Nunc gravida ultrices felis eget faucibus.
                    Praesent aliquet lorem purus, quis mollis nisi laoreet
                    vitae. Mauris consequat tortor. Duis fermentum a massa in
                    convallis. Quisque eu ultrices enim, et interdum augue...
                  </p>
                </div>
              </div>
              {/* END BLOG POST #2 */}
              {/* BLOG POST #3 */}
              <div className="blog-post">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img">
                  <img
                    className="img-fluid"
                    src="images/blog/post-6-img.jpg"
                    alt="blog-post-image"
                  />
                </div>
                {/* BLOG POST TEXT */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-xl steelblue-color">
                    <Link href="/single-post">
                      <a>Your Health Is In Your Hands</a>
                    </Link>
                  </h5>
                  {/* Post Data */}
                  <span>
                    Apr 28, 2019 by
                    <span>Dr.Jonathan Barnes</span>
                  </span>
                  {/* Post Text */}
                  <p>
                    Suscipit in magna dignissim, porttitor hendrerit diam. Nunc
                    gravida ultrices felis eget faucibus. Praesent aliquet lorem
                    purus, quis mollis nisi laoreet vitae. Mauris nec consequat
                    tortor. Duis and massa in convallis quisque eu interdum
                    augue faucibus orci luctus et ultrices posuere ...
                  </p>
                </div>
              </div>
              {/* END BLOG POST #3 */}
              {/* BLOG POST #4 */}
              <div className="blog-post">
                {/* BLOG YOUTUBE LINK */}
                <div className="blog-post-img">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      width={730}
                      height={450}
                      src="https://www.youtube.com/embed/7e90gBu4pas"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                {/* BLOG POST TEXT */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-xl steelblue-color">
                    <Link href="/single-post">
                      <a>
                        {`20 Years of Caring. 15 Fact About MedService,
                        Melbourne's First Choice for Healthcare`}
                      </a>
                    </Link>
                  </h5>
                  {/* Post Data */}
                  <span>
                    Apr 17, 2019 by
                    <span>Dr.Jonathan Barnes</span>
                  </span>
                  {/* Post Text */}
                  <p>
                    Donec dolor magna, suscipit in magna dignissim, porttitor
                    hendrerit diam. Nunc gravida ultrices felis eget faucibus.
                    Praesent aliquet lorem purus, quis mollis nisi laoreet
                    vitae. Mauris consequat tortor. Duis fermentum a massa in
                    convallis. Quisque eu ultrices enim, et interdum augue...
                  </p>
                </div>
              </div>
              {/* END BLOG POST #4 */}
              {/* BLOG PAGE PAGINATION */}

            </div>
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
          </div>
          {/* END BLOG POSTS HOLDER */}
          {/* SIDEBAR */}

          {/* END SIDEBAR */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default BlogPage;
