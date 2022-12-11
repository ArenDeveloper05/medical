import useTranslation from "next-translate/useTranslation";
import { useState, useEffect } from "react";
import { generateLanguage } from "../../../utils";
import Editor from "../../Editor";
import SelectDoctor from "./selectDoctor/SelectDoctor";
import { TfiClose } from "react-icons/tfi";

const ServicesModal = ({
  setModal,
  edit,
  servicesData,
  setServicesData,
  postService,
  clickable,
  setClickable,
  selectedService,
  clickableServiceData,
  setClickableServiceData,
}) => {
  const { lang } = useTranslation("common");
  const [emptyName, setEmptyName] = useState(false);

  //Editor
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const editorHandleChange = (value) => {
    setClickableServiceData((prevData) => {
      return {
        ...prevData,
        description: value,
      };
    });
  };

  useEffect(() => {
    return () => {
      setClickableServiceData((prev) => {
        return {
          ...prev,
          description: "",
          doctorsIdList: [],
        };
      });
    };
  }, []);

  return (
    <div className="modal-parent">
      <div className="services-modal" style={{ width: "800px" }}>
        <div className="services-modal-visible">
          <div style={{ marginLeft: "auto" }}>
            <button
              className="button rounded bg-danger"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setModal(false);
                setClickable((prev) => {
                  return {
                    ...prev,
                    isClickable: false,
                  };
                });
              }}
            >
              <TfiClose />
            </button>
          </div>
          <h1>
            Ընտրված լեզուն ՝{" "}
            {lang == "hy" ? "հայերեն" : lang == "ru" ? "ռուսերեն" : "անգլերեն"}
          </h1>
          <label htmlFor="service-name">
            <h5 className="field-color">Ծառայության անվանումը</h5>
          </label>
          <input
            type="text"
            id="service-name"
            className={emptyName ? "border border-danger" : ""}
            style={{
              outline: "none",
              border: "none",
              boxShadow: "0px 2px 3px 2px rgb(195 194 194)",
              textIndent: "8px",
              transform: "scale(1.05)",
            }}
            value={servicesData.name}
            onChange={(e) => {
              setServicesData((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              });
            }}
          />
        </div>
        {edit && clickable.showToggleFinal && (
          <div className="last-or-not">
            <label htmlFor="isFinal" style={{ margin: "20px 0" }}>
              <h5 className="field-color">Վերջինն է, թե ոչ</h5>
            </label>
            <input
              type="checkbox"
              id="isFinal"
              style={{ marginLeft: "6px" }}
              checked={servicesData.isFinal == "nonFinal" ? false : true}
              onChange={() => {
                setServicesData((prev) => {
                  return {
                    ...prev,
                    isFinal: prev.isFinal == "nonFinal" ? "final" : "nonFinal",
                  };
                });
                setClickable((prev) => {
                  return {
                    isClickable: !prev.isClickable,
                    visible: !prev.visible,
                    showToggleFinal: true,
                  };
                });
              }}
            />
          </div>
        )}

        {clickable.visible && edit && (
          <div style={{ marginTop: "40px" }}>
            <label htmlFor="description">
              <h5 className="field-color">Ծառայության նկարագրությունը</h5>
            </label>
          </div>
        )}

        <div
          style={
            clickable.visible && edit
              ? { width: "100%" }
              : { width: "100%", display: "none" }
          }
        >
          <Editor
            editorValue={clickableServiceData.description}
            setEditorValue={editorHandleChange}
            editorLoaded={editorLoaded}
            setEditorLoaded={setEditorLoaded}
          />
        </div>
        {clickable.visible && edit && (
          <SelectDoctor
            clickableServiceData={clickableServiceData}
            setClickableServiceData={setClickableServiceData}
          />
        )}
        <button
          style={{ margin: "30px auto auto auto" }}
          onClick={() => {
            if (servicesData.name.trim()) {
              postService({
                name: servicesData.name,
                description: clickableServiceData.description,
                imageUrl: "",
                category_id: selectedService.parrent_id + "",
                doctorsIdList: clickableServiceData.doctorsIdList,
                lang: generateLanguage(lang),
              });
              emptyName && setEmptyName(false);
            } else {
              setEmptyName(true);
            }
          }}
          className="services-admin-base-add"
        >
          {edit ? "Խմբագրել" : "Ավելացնել"}
        </button>
      </div>
    </div>
  );
};

export default ServicesModal;
