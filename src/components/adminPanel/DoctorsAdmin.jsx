import { useCallback, useEffect, useState, useRef } from "react";
import { addDoctor, changeDoctor, getAllDoctors } from "../../DataServices";
import CKeditor from "../CKeditor";
import Table from "./Table";

const DoctorsAdmin = () => {
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
    biography: "",
  });

  //Refs
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const patronymicRef = useRef(null);

  //All doctors Data
  const [allDoctors, setAllDoctors] = useState([]);

  //Loader for doctors data
  const [loadDoctors, setLoadDoctors] = useState(false);

  //State for knowing name of button // Add or Edit
  const [edit, setEdit] = useState(true);

  //Selected Doctor
  const [selectedDoctor, setSelectedDoctor] = useState({});

  //Functions
  const fetchData = async () => {
    setLoadDoctors(true);
    const {
      data: { data },
    } = await getAllDoctors();
    setLoadDoctors(false);
    setAllDoctors(data);
  };

  const clearInputValues = () => {
    setDoctorData({
      firstName: "",
      lastName: "",
      patronymic: "",
      specialization: "",
      position: "",
      services: "",
      biography: "",
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setDoctorData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: value,
      };
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postDoctor = useCallback(async () => {
    if (!doctorData.firstName) {
      firstNameRef.current.style.border = "1px solid red";
    } else {
      firstNameRef.current.style.border = "none";
    }

    if (!doctorData.lastName) {
      lastNameRef.current.style.border = "1px solid red";
    } else {
      lastNameRef.current.style.border = "none";
    }

    if (!doctorData.patronymic) {
      patronymicRef.current.style.border = "1px solid red";
    } else {
      patronymicRef.current.style.border = "none";
    }
    try {
      if (
        doctorData.firstName.trim() &&
        doctorData.lastName.trim() &&
        doctorData.patronymic.trim()
      ) {
        if (edit) {
          await addDoctor(doctorData);
        } else {
          await changeDoctor(doctorData, selectedDoctor.id);
        }
        fetchData();
        clearInputValues();
      }
    } catch (error) {
      console.log(error, "chavelacav");
    }
  }, [doctorData, edit, selectedDoctor]);

  return (
    <div className="doctors-admin-panel">
      <section className="doctors-admin-panel-edit">
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="firstname">Անուն</label>
          <input
            type="text"
            id="firstname"
            name="firstName"
            value={doctorData.firstName}
            onChange={(e) => handleChange(e)}
            ref={firstNameRef}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="lastname">Ազգանուն</label>
          <input
            type="text"
            id="lastname"
            name="lastName"
            value={doctorData.lastName}
            onChange={(e) => handleChange(e)}
            ref={lastNameRef}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="patronymic">Հայրանուն</label>
          <input
            type="text"
            id="patronymic"
            name="patronymic"
            value={doctorData.patronymic}
            onChange={(e) => handleChange(e)}
            ref={patronymicRef}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="specialization">Մասնագիտություն</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
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
            value={doctorData.services}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label>Կենսագրություն</label>
        </div>
        <CKeditor
          name="biography"
          value={doctorData.biography}
          onChange={(data) => {
            setDoctorData((prevData) => {
              return {
                ...prevData,
                biography: data,
              };
            });
          }}
          editorLoaded={editorLoaded}
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
        <Table
          data={allDoctors}
          setDoctorData={setDoctorData}
          loadDoctors={loadDoctors}
          edit={edit}
          setEdit={setEdit}
          selectedDoctor={selectedDoctor}
          setSelectedDoctor={setSelectedDoctor}
          fetchData={fetchData}
        />
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
