import React, { useCallback, useState,useRef,useEffect } from 'react'
import { getAllNews } from '../../../DataServices';
import { getPaginatedNews,getNewsLength,addNews,changeNews } from '../../../DataServices';
import { generateLanguage } from '../../../utils';
import useTranslation from 'next-translate/useTranslation';
import NewsTable from './NewsTable';
import Loader from '../Loader';

const NewsAdmin = () => {
  const { t,lang } = useTranslation('common');
    const [newsData , setNewsData] = useState({
        title:"",
        description:"",
        min_description:"",
        imageUrl:"",
        isTop:"nontop",
        lang:generateLanguage(lang),
    });
    const [fetchedNewsData, setFetchedNewsData] = useState([]);
    const [newsDataLoading, setNewsDataLoading] = useState(false);
    const [newsDataError, setNewsDataError] = useState(false);
    const [dataLength, setDataLength] = useState(-1);
    const [selectedNews, setSelectedNews] = useState({});
    const [edit, setEdit] = useState(true);
    const itemsPerPage = 10;
    const [selectedPage, setSelectedPage] = useState({page:0,request:true});
  

      //Refs
    const titleRef = useRef(null);
    const min_descriptionRef = useRef(null);
    const isTopRef = useRef(null);
    // const descriptionRef = useRef(null);

    const handleChange = (event) =>{
        const value = event.target.value;
        
        setNewsData((prevData =>{
            return {
                ...prevData,
                [event.target.name]: value, 
              };
        }))
    }

    const fetchData = useCallback(async (page) => {
      setNewsDataLoading(true);
      try {
        const {
          data: { data },
        } = await getPaginatedNews(generateLanguage(lang), itemsPerPage, page);
        setFetchedNewsData(data[0]);
        
        newsDataError && setNewsDataError(false);
      } catch (error) {
        console.log(error);
        setNewsDataError(true);
      }
      setNewsDataLoading(false);
  },[lang, newsDataError])

      // useEffect(() => {
      //   console.log(newsData)
      // },[newsData])

      useEffect(() => {
        async function getNews() {
          setNewsDataLoading(true);
          try {
            const {
              data: { data },
            } = await getPaginatedNews(generateLanguage(lang), itemsPerPage, 1);
            setFetchedNewsData(data[0]);
            const length = await getNewsLength();
            // console.log(length.data.data, "asddsadas");
            setDataLength(length.data.data);
            // newsDataError && setNewsDataError(false);
            setNewsDataLoading(false);
          } catch (error) {
            // setNewsDataError(true);
            setNewsDataLoading((prev) => !prev);
          }
        }
        getNews();
      }, []);

      const clearInputValues = () => {
        setNewsData({
          title:"",
          description:"",
          min_description:"",
          imageUrl:"",
          isTop:"",
          lang:"",
        });
      };
    
      const postNews = useCallback(async () => {
        if (!newsData.title) {
          titleRef.current.style.border = "1px solid red";
        } else {
          titleRef.current.style.border = "none";
        }
    
        if (!newsData.isTop) {
          isTopRef.current.style.border = "1px solid red";
        } else {
          isTopRef.current.style.border = "none";
        }
    
        if (!newsData.min_description) {
          min_descriptionRef.current.style.border = "1px solid red";
        } else {
          min_descriptionRef.current.style.border = "none";
        }
        // if(!newsData.description){
        //   descriptionRef.current.style.border = "1px solid red";
        // }else{
        //   descriptionRef.current.style.border = "none";
        // }S
        try {
          // if (
          //   newsData.title.trim() &&
          //   newsData.imageUrl &&
          //   newsData.min_description.trim() &&
          //   newsData.description.trim() &&
          //   newsData.isTop.trim()
          // ){
           
            if (edit) {
              
              await addNews(newsData);
              clearInputValues();
              // console.log("avelacvec ")
            } else {
              console.log(newsData,"xmbagrvac data")
              await changeNews(newsData,generateLanguage(lang), selectedNews.ID);
              clearInputValues();
              setEdit((prev) => !prev)
          }
          fetchData(1);
          // console.log(newsData,"avelacav")
        }
        
        // } 
        catch (error) {
          console.log(error, "chavelacav");
        }
          
          
      }, [newsData, edit, selectedNews, fetchData, lang]);

    return (
        <div className='news-admin-panel'>
          <div>
           <div className="doctors-admin-panel-edit-row">
                <label htmlFor="title">Վերնագիր</label>
                <input
                type = "text"
                id = "title"
                name = "title"
                value = {newsData.title}
                ref = {titleRef}
                onChange = { (e) => handleChange(e) }
            />
            </div>
            
            <div className="doctors-admin-panel-edit-row">
            <label htmlFor="min_description">Կարճ նկարագիր</label>
            <input
                type = "text"
                id = "min_description"
                name = "min_description"
                ref = {min_descriptionRef}
                value = {newsData.min_description}
                onChange = {(e) => handleChange(e)}
            />
            </div>

            <input 
            type = "file"
            className='file-input'
            name = "imageUrl"
            value = {newsData.imageUrl}
            onChange={(e)=>{ (e) => setNewsData((prev) => {
              return{
                ...prev,
                imageUrl: e.target.files[0]
              }
            })}}
            />

            <div className="doctors-admin-panel-edit-row">
            <label htmlFor="description">Տեքստ</label>
                <textarea
                className='news-text-area'
                id  = "description"
                name = "description"
                value = {newsData.description}
                onChange={(e) => handleChange(e)}
                />
            </div>

            <div >
            <label htmlFor="isTop">Տոպ Հայտարարություն</label>
                <input
                type = "checkbox"
                className='checkbox'
                id="isTop"
                name="isTop"
                ref = {isTopRef}
                // value = {newsData.isTop}
                checked={newsData.isTop=="top"?true:false}
                onChange={(e) => {
                  setNewsData((prev) => {
                    return{
                      ...prev,
                      isTop: prev.isTop=="top"?"nontop":"top"
                    }
                  })
                }}
                />
            </div>
      <div
          className="doctors-admin-panel-edit-row"
          style={{ marginTop: "2rem" }}
        >
          {!edit && (
            <div>
              <button
                className="edit-button"
                onClick={() => {
                  setEdit((prev) => !prev);
                  clearInputValues()
                }}
              >
                Չեղարկել խմբագրման ռեժիմը
              </button>
            </div>
          )}
          <button type="button" className="ml-auto button rounded button edit-button" onClick={postNews}>
            {edit ? "Ավելացնել" : "Խմբագրել"}
          </button>
        </div>
      </div>
      <section className="doctors-admin-panel-table">
        {newsDataLoading && <Loader/>}
      <NewsTable
          fetchedNewsData={fetchedNewsData}
          setFetchedNewsData = {setFetchedNewsData}
          newsData={newsData}
          setNewsData={setNewsData}
          newsDataLoading={newsDataLoading}
          edit={edit}
          setEdit={setEdit}
          selectedNews = {selectedNews}
          setSelectedNews = {setSelectedNews}
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
          itemsPerPage = {itemsPerPage}
          dataLength = {dataLength}
          getData = {fetchData}
      />
      </section>
        </div>
        
    )
}

export default NewsAdmin