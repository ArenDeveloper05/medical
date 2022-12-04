import { memo, useState, useEffect, useRef } from "react";
import uuid from "react-uuid";

const Pagination = ({
  dataLength,
  itemsPerPage,
  getData,
  selectedPage,
  setSelectedPage,
}) => {
  const firstRenderForArr = useRef(true);
  const firstRenderForSelectedPage = useRef(true);

  const countOfPages = Math.ceil(dataLength / itemsPerPage);

  const initialArr =
    countOfPages == 0
      ? []
      : countOfPages == 1
      ? [1]
      : countOfPages == 2
      ? [1, 2]
      : [1, 2, 3];

  let [currArr, setCurrArr] = useState(initialArr);

  useEffect(() => {
    if (firstRenderForArr.current) {
      firstRenderForArr.current = false;
    } else {
      setCurrArr(initialArr);
    }
  }, [countOfPages]);

  useEffect(() => {
    if (firstRenderForSelectedPage.current) {
      firstRenderForSelectedPage.current = false;
    } else {
      if (selectedPage.request) {
        getData(selectedPage.page, itemsPerPage);
      }
    }
  }, [selectedPage]);

  //!!Not put the getData function in useEffect dependency(infinite loop);

  return (
    <div className="d-flex">
      <button
        className="pagination-page p-3  rounded m-1 "
        disabled={selectedPage.page == 1}
        onClick={() => {
          if (selectedPage.page > currArr[0]) {
            setSelectedPage((prev) => {
              return {
                page: prev.page - 1,
                request: true,
              };
            });
          } else {
            const newArr = currArr.map((item) => item - 1);
            setCurrArr(newArr);
          }
        }}
      >
        <i className="fas fa-long-arrow-alt-left" />
      </button>

      {dataLength !== 0 &&
        currArr.map((item) => {
          return (
            <div
              className="pagination-page p-3  rounded m-1"
              key={uuid()}
              style={
                selectedPage.page == item
                  ? {
                      backgroundColor: "rgb(0 163 200)",
                      color: "white",
                    }
                  : null
              }
              onClick={(e) => {
                selectedPage.page !== item &&
                  setSelectedPage((prev) => {
                    return {
                      page: item,
                      request: true,
                    };
                  });
              }}
            >
              {item}
            </div>
          );
        })}

      <button
        className="pagination-page p-3 rounded m-1"
        disabled={selectedPage.page == countOfPages}
        onClick={() => {
          if (selectedPage.page < currArr[currArr.length - 1]) {
            setSelectedPage((prev) => {
              return {
                page: prev.page + 1,
                request: true,
              };
            });
          } else {
            const newArr = currArr.map((item) => item + 1);
            setCurrArr(newArr);
          }
        }}
      >
        <i className="fas fa-long-arrow-alt-right" />
      </button>
    </div>
  );
};

export default memo(Pagination);
