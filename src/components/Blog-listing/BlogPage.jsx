import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { generateLanguage} from "../../utils";
import useTranslation from "next-translate/useTranslation";
import { getPaginatedNews,getAllNews,getNewsLength, getPopularNews } from "../../DataServices";
import Loader from "../adminPanel/Loader";
import Pagination from "../Pagination";
const BlogPage = () => {

  const [state, setState] = useState([]);
  const [newsData, setNewsData] = useState("");
  const [popularData, setPopularData] = useState([]);
  const { t,lang } = useTranslation('common');
  const [newsDataLoading, setNewsDataLoading] = useState(false);
  const [newsDataError, setNewsDataError] = useState(false);
  const [dataLength, setDataLength] = useState(-1);
  const [selectedPage, setSelectedPage] = useState({page:0,request:true});
  const itemsPerPage = 10;
  

   const getPageNews = async (page) => {
    setNewsDataLoading(true);
    try {
      const {
        data: { data },
      } = await getPaginatedNews(generateLanguage(lang), itemsPerPage, page);
      setNewsData(data[0]);
      newsDataError && setNewsDataError(false);
    } catch (error) {
      console.log(error);
      setNewsDataError(true);
    }
    setNewsDataLoading(false);
  };

  useEffect(() => {
    async function getNews() {
      setNewsDataLoading(true);
      try {
        const {
          data: { data },
        } = await getPaginatedNews(generateLanguage(lang), itemsPerPage, 1);
        const length = await getNewsLength();
        console.log(length.data.data, "asddsadas");
        setDataLength(length.data.data);
        setNewsData(data[0]);
        newsDataError && setNewsDataError(false);
        const result  = await getPopularNews(generateLanguage(lang))
        console.log(result.data.data[0])
        setPopularData(result.data.data[0])
      
      } catch (error) {
        setNewsDataError(true);
      }
      setNewsDataLoading(false);
    }
    getNews();
  }, []);


  return (
    <div id="blog-page" className="wide-100 blog-page-section division">
      <div className="container">
        <div className="row new-row">
          {/* BLOG POSTS HOLDER */}
          <div className="col-lg-12 ">
            <div id="posts" className="posts-holder pr-30 pr-31">
              {/* BLOG POST #1 */}
              <div className="posts-holder-pr-30-left">
      {newsDataLoading && <Loader></Loader>}
                {!newsDataLoading && newsData && newsData.map(({ID ,
                  Status,
                  ImageURL,
                  CreatedAt,
                  UpdatedAt,
                  Title,
                  Text,
                  TextShort}) => {
                return(
                   <div key ={ID && ID}className="blog-post">
                   <div className="blog-post-img">
                     <img
                       className="img-fluid"
                       src={ImageURL && ImageURL}
                       alt="blog-post-image"
                     />
                   </div>
                   <div className="blog-post-txt">
                     <h5 className="h5-xl steelblue-color">
                       <Link href={`/blog-listing/${ID}?id=${ID}`}>
                         <a>{Title && Title}</a>
                       </Link>
                     </h5>
                     <span>
                       {TextShort && TextShort}
                     </span>
                     <p>
                       {Text && Text}
                     </p>
                   </div>
                 </div>
                )
                }
                )}
            </div>

          {/* SIDEBAR */}
          <aside id="sidebar" className="col-lg-4">
             {/* POPULAR POSTS */}
             <div className="popular-posts sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-sm steelblue-color">{t("news.popularposts")}</h5>
              <ul className="popular-posts">
                  {popularData && popularData.map((
                    {ID ,
                      ImageURL,
                      Title,
                      TextShort} ) =>{
                      
                      return(
                        <li 
                        key = {ID && ID}
                        className="clearfix d-flex align-items-center">
                        <img
                          className="img-fluid"
                          src={ImageURL && ImageURL}
                          alt="blog-post-preview"
                        />
                        <div className="post-summary">
                         <h5>{Title && Title}</h5>
                          <Link href={`/blog-listing/${ID}?id=${ID}`}>
                            <a>{TextShort && TextShort}</a>
                          </Link>
                        </div>
                      </li>
                      )
                  }
                   )}
              </ul>
            </div>
          </aside>           
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "max-content", margin: "16px auto" }}>
        {dataLength !== -1 && (
          <Pagination
          dataLength = {dataLength}
          itemsPerPage = {itemsPerPage}
          getData = {getPageNews}
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
          />
        )}
      </div>

    </div>
  );
};

export default BlogPage;
