import { useEffect, useState } from "react";
import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";
import uuid from "react-uuid";
import { AiFillDelete } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const Menu = ({
  items,
  setModal,
  setEdit,
  setSelectedService,
  setServicesData,
  setDeleteService,
  setClickable,
  setClickableServiceData,
}) => {
  const [displayChildren, setDisplayChildren] = useState({});

  // useEffect(() => {
  //   console.log(displayChildren);
  // }, [displayChildren]);

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={uuid()} className="mobile-service">
            {item.name}{" "}
            {item.children.length !== 0 && (
              <span
                onClick={() => {
                  setDisplayChildren({
                    ...displayChildren,
                    [item.name]: !displayChildren[item.name],
                  });
                }}
              >
                {displayChildren[item.name] ? (
                  <BsCaretDownFill
                    className="icon-hover"
                    style={{
                      color: "grey",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <BsCaretRightFill
                    className="icon-hover"
                    style={{ fontSize: "22px", cursor: "pointer" }}
                  />
                )}
              </span>
            )}
            {/* {item.children.length === 0 && ( */}
            <>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#398dbb",
                }}
                onClick={() => {
                  if (item.DoctorsIdList) {
                    console.log("clicked service");
                    setClickable(() => {
                      return {
                        isClickable: true,
                        visible: true,
                        showToggleFinal: false,
                      };
                    });
                    setServicesData((prev) => {
                      return {
                        ...prev,
                        name: item.name,
                        isFinal: item.isFinal == 1 ? "final" : "nonFinal",
                        parrent_id: item.id ? item.id + "" : item.ID + "",
                        isFinal: "final",
                      };
                    });
                    setClickableServiceData((prev) => {
                      return {
                        ...prev,
                        description: item.Description,
                        doctorsIdList: item.DoctorsIdList,
                      };
                    });
                  } else {
                    console.log("clicked category");
                    if (item.children.length !== 0) {
                      setClickable((prev) => {
                        return {
                          isClickable: false,
                          visible: false,
                          showToggleFinal: false,
                        };
                      });
                    } else {
                      setClickable((prev) => {
                        return {
                          isClickable: false,
                          visible: false,
                          showToggleFinal: true,
                        };
                      });
                    }

                    setServicesData({
                      name: item.name,
                      isFinal: item.isFinal == 1 ? "final" : "nonFinal",
                      parrent_id: item.id ? item.id + "" : item.ID + "",
                    });
                  }

                  setEdit(true);
                  setModal((prev) => !prev);
                  setSelectedService({
                    parrent_id: item.parrent_id,
                    id: item.id,
                    description: item.Description,
                    doctorsIdList: item.DoctorsIdList,
                  });
                }}
              >
                <FaEdit className="icon-hover" style={{ cursor: "pointer" }} />
              </span>
            </>
            {item.children.length === 0 && (
              <span
                style={{ fontSize: "26px", fontWeight: 700, color: "red" }}
                onClick={() => {
                  setSelectedService({
                    id: item.id ? item.id : item.ID,
                    name: item.name,
                    isFinal: item.isFinal,
                    parrent_id: item.parrent_id,
                  });
                  setSelectedService((prev) => {
                    return {
                      ...prev,
                      isClickable:
                        item.CategoryID !== undefined &&
                        item.CategoryID !== null
                          ? true
                          : false,
                    };
                  });
                  setDeleteService((prev) => !prev);
                }}
              >
                <AiFillDelete
                  className="icon-hover-delete"
                  style={{ cursor: "pointer" }}
                />
              </span>
            )}
            {/* )} */}
            {/* {!displayChildren[item.name] ? "" : <button>-</button>} */}
            {item.isFinal === 0 && (
              <span
                style={{ fontSize: "24px", color: "#3d9970" }}
                onClick={() => {
                  setServicesData({
                    name: "",
                    isFinal: item.isFinal == 1 ? "final" : "nonFinal",
                    parrent_id: item.id + "",
                  });
                  setEdit(false);
                  setModal((prev) => !prev);
                }}
              >
                <BsPlusCircleFill
                  style={{ cursor: "pointer" }}
                  className="icon-hover"
                />
              </span>
            )}
            {displayChildren[item.name] && item.children && (
              <Menu
                items={item.children}
                setModal={setModal}
                setSelectedService={setSelectedService}
                setServicesData={setServicesData}
                setDeleteService={setDeleteService}
                setEdit={setEdit}
                setClickable={setClickable}
                setClickableServiceData={setClickableServiceData}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
