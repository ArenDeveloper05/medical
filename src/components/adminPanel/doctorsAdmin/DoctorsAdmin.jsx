import useTranslation from "next-translate/useTranslation";
import { useCallback, useEffect, useState, useRef } from "react";
import {
  addDoctor,
  addDoctorPicture,
  APIUrl,
  changeDoctor,
  getDoctorsLength,
  getPaginateDoctors,
} from "../../../DataServices";
import { generateLanguage } from "../../../utils";
import Pagination from "../../Pagination";
import Editor from "../../Editor";
import DoctorsTable from "./DoctorsTable";
import Image from "next/image";

const DoctorsAdmin = () => {
  //First Render
  const firstRender = useRef(true);

  //To know current language for requests
  const { lang } = useTranslation("common");

  //To know current language for input placeholders
  const language =
    lang == "hy" ? "հայերեն" : lang == "ru" ? "ռուսերեն" : "անգլերեն";

  //EDITOR
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  //Input Values
  const [doctorData, setDoctorData] = useState({
    firstName: "",
    lastName: "",
    patronymic: "",
    specialization: "",
    position: "",
    services: "",
    staffGroup: false,
    biography: "",
    picture: "",
  });

  //Test
  // const [doctorPicture, setDoctorPicture] = useState(null);

  //Validation if firstName, lastName or patronymic are false
  const [fieldsValidation, setFieldsValidation] = useState({
    firstNameField: true,
    lastNameField: true,
    patronymicField: true,
  });

  //All doctors Data
  // const [allDoctors, setAllDoctors] = useState([])

  //Loader for doctors Data
  const [loadDoctors, setLoadDoctors] = useState(false);

  //Error handler for doctors Data
  const [error, setError] = useState(false);

  //Error handler for error when delete doctor
  const [deleteError, setDeleteError] = useState(false);

  //State for knowing name of button // Add or Edit
  const [edit, setEdit] = useState(true);

  //Selected Doctor
  const [selectedDoctor, setSelectedDoctor] = useState({});

  //Select Value
  const [selectValue, setSelectValue] = useState(10);

  //PAGINATION
  const [doctorsData, setDoctorsData] = useState([]);
  // const [doctorsDataLoading, setDoctorsDataLoading] = useState(false);
  // const [doctordDataError, setDoctorsDataError] = useState(false);
  const [dataLength, setDataLength] = useState(-1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedPage, setSelectedPage] = useState({
    page: 1,
    request: true,
  });

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      clearInputValues();
      getPageDoctors(selectedPage.page, itemsPerPage);
    }
  }, [lang]);

  useEffect(() => {
    console.log(doctorData);
  }, [doctorData]);

  //Functions
  const getPageDoctors = useCallback(
    async (page, perPage) => {
      setLoadDoctors(true);
      try {
        const {
          data: { data },
        } = await getPaginateDoctors(generateLanguage(lang), perPage, page);
        setDoctorsData(data[0]);
        error && setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoadDoctors(false);
    },
    [lang, error]
  );

  const clearInputValues = () => {
    setDoctorData({
      firstName: "",
      lastName: "",
      patronymic: "",
      specialization: "",
      position: "",
      services: "",
      biography: "",
      picture: "",
    });
  };

  useEffect(() => {
    let isMounted = true;
    async function getDoctors() {
      setLoadDoctors(true);
      try {
        const {
          data: { data },
        } = await getPaginateDoctors(generateLanguage(lang), itemsPerPage, 1);
        const length = await getDoctorsLength();
        setDataLength(length.data.data);
        setDoctorsData(data[0]);
        error && setError(false);
      } catch (error) {
        setError(true);
      }
      setLoadDoctors(false);
    }
    if (isMounted) {
      getDoctors();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setDoctorData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: value,
      };
    });
  };

  const editorHandleChange = (value) => {
    setDoctorData((prevData) => {
      return {
        ...prevData,
        biography: value,
      };
    });
  };

  const postDoctor = useCallback(async () => {
    !doctorData.firstName
      ? setFieldsValidation((prev) => {
          return {
            ...prev,
            firstNameField: false,
          };
        })
      : setFieldsValidation((prev) => {
          return {
            ...prev,
            firstNameField: true,
          };
        });

    !doctorData.lastName
      ? setFieldsValidation((prev) => {
          return {
            ...prev,
            lastNameField: false,
          };
        })
      : setFieldsValidation((prev) => {
          return {
            ...prev,
            lastNameField: true,
          };
        });

    !doctorData.patronymic
      ? setFieldsValidation((prev) => {
          return {
            ...prev,
            patronymicField: false,
          };
        })
      : setFieldsValidation((prev) => {
          return {
            ...prev,
            patronymicField: true,
          };
        });
    try {
      if (
        doctorData.firstName.trim() &&
        doctorData.lastName.trim() &&
        doctorData.patronymic.trim()
      ) {
        if (edit) {
          const {
            data: {
              data: { dataValues },
            },
          } = await addDoctor({
            ...doctorData,
            lang: generateLanguage(lang),
            staffGroup: doctorData.staffGroup ? "1" : "0",
          });
        } else {
          await changeDoctor(
            {
              ...doctorData,
              staffGroup: doctorData.staffGroup ? 1 : 0,
            },
            selectedDoctor.id,
            generateLanguage(lang)
          );
        }
        const length = await getDoctorsLength();
        setDataLength(length.data.data);
        getPageDoctors(selectedPage.page, itemsPerPage);
        clearInputValues();
        !edit && setEdit(true);
      }
    } catch (error) {
      console.log(error, "chavelacav");
      if (error.response) {
        if (error.response.statusText == "Unauthorized") {
          localStorage.removeItem("token");
          location.reload();
        }
      }
    }
  }, [
    doctorData,
    edit,
    selectedDoctor,
    lang,
    getPageDoctors,
    itemsPerPage,
    selectedPage,
  ]);

  const handleSelect = (e) => {
    setItemsPerPage(Number(e.target.value));
    if (selectedPage.page !== 1) {
      setSelectedPage((prev) => {
        return {
          page: 1,
          request: true,
        };
      });
    } else {
      getPageDoctors(selectedPage.page, Number(e.target.value));
    }

    setSelectValue(Number(e.target.value));
  };

  return (
    <div className="doctors-admin-panel">
      <section className="doctors-admin-panel-edit">
        <h1 style={{ textAlign: "center" }}>
          Ընտրված լեզուն՝{" "}
          {lang == "hy" ? "հայերեն" : lang == "ru" ? "ռուսերեն" : "անգլերեն"}
        </h1>
        <div className="doctors-admin-panel-edit-row">
          <div className="doctors-admin-panel-edit-row-picture">
            <label htmlFor="picture-input">Նկար</label>
            <input
              type="text"
              id="picture-input"
              name="picture"
              placeholder="Գրեք նկար-ի id-n"
              value={doctorData.picture}
              onChange={(e) => handleChange(e)}
            />
            <div
              className="doctors-admin-panel-edit-row-picture-img"
              style={{
                width: "200px",
                height: "200px",
                boxShadow: "2px 2px 10px grey",
              }}
            >
              {doctorData.picture !== "" ? (
                <Image
                  loader={() =>
                    `${APIUrl}/images/doctors/${doctorData.picture}`
                  }
                  crossOrigin="anonymous"
                  className="img-fluid card-appear"
                  src={`${APIUrl}/images/doctors/${doctorData.picture}`}
                  alt="doctor-foto"
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
          </div>
        </div>
        <div className="staff">
          <label htmlFor="staffGroup">Աշխատակազմ</label>
          <input
            type="checkbox"
            id="staffGroup"
            name="staffGroup"
            checked={Boolean(doctorData.staffGroup)}
            value={Boolean(doctorData.staffGroup)}
            onChange={() => {
              setDoctorData((prev) => {
                return {
                  ...prev,
                  staffGroup: !prev.staffGroup,
                };
              });
            }}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="firstName">Անուն</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder={`Գրեք ${language} լեզվի ձեր տարբերակը`}
            value={doctorData.firstName}
            style={
              !fieldsValidation.firstNameField
                ? { border: "1px solid red" }
                : {}
            }
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="lastName">Ազգանուն</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder={`Գրեք ${language} լեզվի ձեր տարբերակը`}
            value={doctorData.lastName}
            style={
              !fieldsValidation.lastNameField ? { border: "1px solid red" } : {}
            }
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="patronymic">Հայրանուն</label>
          <input
            type="text"
            id="patronymic"
            name="patronymic"
            placeholder={`Գրեք ${language} լեզվի ձեր տարբերակը`}
            value={doctorData.patronymic}
            style={
              !fieldsValidation.patronymicField
                ? { border: "1px solid red" }
                : {}
            }
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="specialization">Մասնագիտություն</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            placeholder={`Գրեք ${language} լեզվի ձեր տարբերակը`}
            value={doctorData.specialization}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="position">Պաշտոն</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder={`Գրեք ${language} լեզվի ձեր տարբերակը`}
            value={doctorData.position}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="services">Ծառայություն</label>
          <input
            type="text"
            id="services"
            name="services"
            placeholder={`Գրեք ${language} լեզվի ձեր տարբերակը`}
            value={doctorData.services}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label>Կենսագրություն</label>
        </div>
        <Editor
          editorValue={doctorData.biography}
          setEditorValue={editorHandleChange}
          editorLoaded={editorLoaded}
          setEditorLoaded={setEditorLoaded}
        />
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
                  clearInputValues();
                }}
              >
                Չեղարկել խմբագրման ռեժիմը
              </button>
            </div>
          )}
          <button type="button" className="ml-auto button" onClick={postDoctor}>
            {edit ? "Ավելացնել" : "Խմբագրել"}
          </button>
        </div>
      </section>
      <section className="doctors-admin-panel-table">
        {deleteError && (
          <div id="something-went-wrong">
            <h1>Ինչ որ բան սխալ է</h1>
          </div>
        )}

        <DoctorsTable
          data={doctorsData}
          setDoctorData={setDoctorData}
          loadDoctors={loadDoctors}
          edit={edit}
          setEdit={setEdit}
          selectedDoctor={selectedDoctor}
          setSelectedDoctor={setSelectedDoctor}
          getPageDoctors={getPageDoctors}
          deleteError={deleteError}
          setDeleteError={setDeleteError}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          itemsPerPage={itemsPerPage}
          dataLength={dataLength}
          setDataLength={setDataLength}
          clearInputValues={clearInputValues}
        />
        <select
          style={{ backgroundColor: "transparent" }}
          value={selectValue}
          onChange={(e) => {
            handleSelect(e);
          }}
        >
          <option value="select" disabled>
            Ցույց տալ
          </option>
          <option value="5">5-ական</option>
          <option value="10">10-ական</option>
          <option value="15">15-ական</option>
        </select>
        <div style={{ width: "max-content", margin: "16px auto" }}>
          {dataLength !== -1 && (
            <Pagination
              dataLength={dataLength}
              itemsPerPage={itemsPerPage}
              getData={getPageDoctors}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
        </div>
      </section>
    </div>
  );
};
// export async function getStaticProps() {

//     const { data } = await getAllDoctors();

//     return {
//         props: {
//             data: data
//         }
//     }

// }

export default DoctorsAdmin;
