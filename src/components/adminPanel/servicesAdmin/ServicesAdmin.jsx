import { useState, useEffect, useCallback } from "react";
import { changeIdName, generateLanguage, hierarchy } from "../../../utils";
import ServicesModal from "./ServicesModal";
import {
  getCategories,
  deleteCategory,
  addService,
  changeClickableService,
  changeService,
  getServices,
  addClickableService,
  deleteClickableService,
} from "../../../DataServices";
import useTranslation from "next-translate/useTranslation";
import Modal from "../Modal";
import Loader from "../Loader";
import Menu from "./Menu";

const ServicesAdmin = () => {
  const { lang } = useTranslation("common");
  const [selectedService, setSelectedService] = useState({});
  const [categories, setCategories] = useState([]);
  const [openServiceModal, setOpenServiceModal] = useState(false);
  const [deleteService, setDeleteService] = useState(false);
  const [edit, setEdit] = useState(false);
  const [servicesData, setServicesData] = useState({
    name: "",
    isFinal: "nonFinal",
    parrent_id: "0",
  });
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [clickable, setClickable] = useState({
    isClickable: false,
    visible: false,
  });

  // Service data
  const [clickableServiceData, setClickableServiceData] = useState({
    description: "",
    doctorsIdList: [],
  });

  // useEffect(() => {
  //   console.log(clickable, "clickable");
  // }, [clickable]);

  // useEffect(() => {
  //   console.log(clickableServiceData, "clickableServiceData");
  // }, [clickableServiceData]);

  // useEffect(() => {
  //   console.log(selectedService, "selectedService");
  // }, [selectedService]);

  // useEffect(() => {
  //   console.log(categories);
  // }, [categories]);

  const postService = useCallback(
    async (obj) => {
      setCategoriesLoading(true);
      try {
        if (edit) {
          if (clickable.isClickable) {
            if (selectedService.id === undefined) {
              console.log("du poxum es arden isk patrasti service");
              await changeClickableService(
                {
                  name: servicesData.name,
                  description: clickableServiceData.description,
                  imageUrl: "",
                  category_id: selectedService.parrent_id + "",
                  doctorsIdList: clickableServiceData.doctorsIdList,
                  lang: generateLanguage(lang),
                },
                generateLanguage(lang),
                Number(servicesData.parrent_id)
              );
            } else {
              await deleteCategory(selectedService.id);
              await addClickableService(obj);
              console.log("creating service with this object", obj);
              console.log("delete from  categories request");
              console.log("add to  services request");
            }
          } else {
            await changeService(
              {
                name: servicesData.name,
                isFinal: servicesData.isFinal,
                parrent_id: selectedService.parrent_id + "",
              },
              generateLanguage(lang),
              selectedService.id
            );
            // console.log("mtela xmbagrum u esa gnace", {
            //   name: servicesData.name,
            //   isFinal: servicesData.isFinal,
            //   parrent_id: selectedService.parrent_id,
            // });
          }
        } else {
          await addService({
            ...servicesData,
            lang: generateLanguage(lang),
          });
        }

        const {
          data: { data },
        } = await getCategories(generateLanguage(lang));
        const res = await getServices(generateLanguage(lang));
        setCategories([...data, ...changeIdName(res.data.data[0])]);
      } catch (error) {
        console.log(error);
        if (error.response) {
          if (error.response.statusText == "Unauthorized") {
            console.log("yes");
            localStorage.removeItem("token");
            location.reload();
          }
        }
      }
      setOpenServiceModal(false);
      setCategoriesLoading(false);
    },
    [
      servicesData,
      lang,
      selectedService.id,
      selectedService.parrent_id,
      clickable,
      clickableServiceData,
      edit,
    ]
  );

  const removeService = useCallback(async () => {
    setCategoriesLoading(true);
    try {
      selectedService.isClickable
        ? await deleteClickableService(selectedService.id)
        : await deleteCategory(selectedService.id);

      const {
        data: { data },
      } = await getCategories(generateLanguage(lang));
      const res = await getServices(generateLanguage(lang));
      setCategories([...data, ...changeIdName(res.data.data[0])]);
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.statusText == "Unauthorized") {
          console.log("yes");
          localStorage.removeItem("token");
          location.reload();
        }
      }
    }
    setDeleteService((prev) => !prev);
    setCategoriesLoading(false);
  }, [selectedService, lang]);

  useEffect(() => {
    let isMounted = true;
    async function fetchCategories() {
      setCategoriesLoading(true);
      try {
        const {
          data: { data },
        } = await getCategories(generateLanguage(lang));
        const res = await getServices(generateLanguage(lang));
        setCategories([...data, ...changeIdName(res.data.data[0])]);
      } catch (error) {
        console.log(error);
        if (error.response) {
          if (error.response.statusText == "Unauthorized") {
            console.log("yes");
            localStorage.removeItem("token");
            location.reload();
          }
        }
      }
      setCategoriesLoading(false);
    }
    if (isMounted) {
      fetchCategories();
    }
    return () => {
      isMounted = false;
    };
  }, [lang]);

  return (
    <div className="services-admin">
      <h1 style={{ textAlign: "center", margin: "48px 0" }}>
        {" "}
        Ծառայություններն ունեն այս կառուցվածքը
      </h1>
      <div
        style={{
          maxWidth: 500,
          boxShadow: "4px 6px 15px  grey",
          margin: "auto",
          backgroundColor: "#fffbf3",
        }}
      >
        <Menu
          items={hierarchy(categories)}
          setModal={setOpenServiceModal}
          setSelectedService={setSelectedService}
          setServicesData={setServicesData}
          setDeleteService={setDeleteService}
          setEdit={setEdit}
          setClickable={setClickable}
          setClickableServiceData={setClickableServiceData}
        />

        <button
          className="services-admin-base-add"
          onClick={() => {
            setServicesData({
              name: "",
              isFinal: "nonFinal",
              parrent_id: "0",
            });
            edit && setEdit(false);
            setOpenServiceModal(true);
          }}
        >
          Ավելացնել ծառայություն
        </button>
      </div>
      {/* For Add and Edit services */}
      {openServiceModal && (
        <ServicesModal
          setModal={setOpenServiceModal}
          edit={edit}
          servicesData={servicesData}
          setServicesData={setServicesData}
          postService={postService}
          clickable={clickable}
          setClickable={setClickable}
          selectedService={selectedService}
          clickableServiceData={clickableServiceData}
          setClickableServiceData={setClickableServiceData}
        />
      )}
      {/* For Add and Edit services */}
      {/* Delete modal */}
      {deleteService && (
        <Modal
          text={`Դուք վստա՞հ եք, որ ցանկանում եք ջնջել ${selectedService.name} ծառայությունը`}
          setModalOpen={setDeleteService}
          removeItem={removeService}
        />
      )}
      {/* Delete modal */}
      {/* Loading */}
      {categoriesLoading && <Loader />}
      {/* Loading */}
    </div>
  );
};

export default ServicesAdmin;
