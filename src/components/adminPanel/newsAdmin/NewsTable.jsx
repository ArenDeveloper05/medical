
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { generateLanguage } from "../../../utils";
import Modal from "../Modal"
import Pagination from "../../../components/Pagination";
import Image from "next/image";
import { deleteNewsFunction } from "../../../DataServices";
const NewsTable = (
  {
  setFetchedNewsData,
  selectedNews,
  setSelectedNews,
  fetchedNewsData,
  setNewsData,
  newsDataLoading,
  edit,
  setEdit,
  itemsPerPage,
  selectedPage,
  setSelectedPage,
  dataLength,
  getData,
}

) => {
    const {lang} = useTranslation("common");
    const [modalOpen, setModalOpen] = useState(false);
  
    useEffect(() => {
      // console.log(selectedNews, "yntrvacy esa")
      
    },[selectedNews])

    const delFunctions = async ()=>{
      try{
        await deleteNewsFunction(selectedNews.ID);
        setModalOpen((prev) => !prev);
        setFetchedNewsData(fetchedNewsData.filter((item)=>item.ID !== selectedNews.ID))
      }
      catch(error){
        console.log(err,"chjnjvec")
      }   
    }

    return (
      <>
        <table
          className="table table-striped"
          style={{ maxWidth: "800px", marginTop: "62px" }}
        >
          <thead className="thead-dark">
            <tr>
              <th>Մուտքագրվել է</th>
              <th>Խմբագրվել է</th>
              <th>Նկար</th>
              <th>Վերնագիր</th>
              <th>Կարևոր</th>
              <th>Ջնջել</th>
              <th>Խմբագրել</th>
            </tr>
          </thead>
          <tbody>
            {
               fetchedNewsData && fetchedNewsData.map(( dataValues ) => {
                    return(
                        <tr key={dataValues.ID}>
                        <td className="font-weight-normal">{ dataValues.CreatedAt && dataValues.CreatedAt.slice(0, 10)}</td>
                        <td className="font-weight-normal">
                          {dataValues.UpdatedAt && dataValues.CreatedAt !== dataValues.UpdatedAt ? dataValues.UpdatedAt.slice(0, 10):"Չի խմբագրվել"}
                          </td>
                        <td className="font-weight-normal">
                          <Image
                              className="img-fluid"
                              src= {"/" + dataValues.ImageURL}
                              alt="newsImage"
                              layout="responsive"
                              objectFit="contain"
                              width={"100%"}
                              height={"100%"}
                            />
                          </td>
                        <td className="font-weight-normal">{dataValues.Title && dataValues.Title}</td>
                        <td className="font-weight-normal">{dataValues.Status == 1? "Այո" : "Ոչ" }</td>
                        <td className="font-weight-normal">
                          <button
                            className="rounded bg-danger button"
                            onClick={() => {
                              console.log(dataValues.ID)  
                              setSelectedNews(dataValues);
                              setModalOpen((prev) => !prev);
                              
                            }}
                          >
                            Ջնջել
                          </button>
                        </td>
                        <td className="font-weight-normal">
                          <button
                            className="rounded button edit-button"
                            onClick={() => {
                              
                              setNewsData({
                                  title: dataValues.Title,
                                  description: dataValues.Text,
                                  min_description:dataValues.TextShort,
                                  imageUrl: dataValues.ImageUrl,
                                  isTop: dataValues.Status == 1 ? "top": "nontop",
                                  lang:generateLanguage(lang),
                              });
                              edit && setEdit((prev) => !prev);
                              selectedNews !== dataValues &&
                                setSelectedNews(dataValues);
                            
                            }}
                          >
                            Խմբագրել
                          </button>
                        </td>
                      </tr>
                    )
                
               }
                )}
          </tbody>
          {
            modalOpen && !newsDataLoading &&(
              <Modal
              text={`Դուք վստա՞հ եք, որ ցանկանում եք ջնջել ${selectedNews.Title && selectedNews.Title} -ը նորություններ բաժնից`}
              removeItem = {delFunctions}
              setModalOpen = {setModalOpen}
              />              
            )
          }
        </table>
        <div style={{ width: "max-content", margin: "16px auto" }}>
        {dataLength !== -1 && (
          <Pagination
          dataLength = {dataLength}
          itemsPerPage = {itemsPerPage}
          getData = {getData}
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
          />
        )}
      </div>
      </>
    );
}

export default NewsTable