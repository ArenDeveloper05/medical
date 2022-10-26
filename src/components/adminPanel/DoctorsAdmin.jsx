import { useCallback, useEffect, useState, useRef } from "react";
import { addDoctor, changeDoctor, getAllDoctors } from "../../DataServices";
import Table from "./Table";

const DoctorsAdmin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [position, setPosition] = useState("");
  const [services, setServices] = useState("");
  const [biography, setBiography] = useState("");

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
  const fetchData = useCallback(async () => {
    setLoadDoctors(true);
    const {
      data: { data },
    } = await getAllDoctors();
    setLoadDoctors(false);
    setAllDoctors(data);
  }, []);

  const clearInputValues = useCallback(() => {
    setFirstName("");
    setLastName("");
    setPatronymic("");
    setSpecialization("");
    setPosition("");
    setServices("");
    setBiography("");
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const postDoctor = useCallback(async () => {
    if (!firstName) {
      firstNameRef.current.style.border = "1px solid red";
    } else {
      firstNameRef.current.style.border = "none";
    }

    if (!lastName) {
      lastNameRef.current.style.border = "1px solid red";
    } else {
      lastNameRef.current.style.border = "none";
    }

    if (!patronymic) {
      patronymicRef.current.style.border = "1px solid red";
    } else {
      patronymicRef.current.style.border = "none";
    }
    try {
      if (firstName.trim() && lastName.trim() && patronymic.trim()) {
        if (edit) {
          await addDoctor({
            firstName,
            lastName,
            patronymic,
            specialization,
            position,
            services,
            biography,
          });
        } else {
          await changeDoctor(
            {
              firstName,
              lastName,
              patronymic,
              specialization,
              position,
              services,
              biography,
            },
            selectedDoctor.id
          );
        }
        fetchData();
        clearInputValues();
      }
    } catch (error) {
      console.log(error, "chavelacav");
    }
  }, [
    firstName,
    lastName,
    patronymic,
    specialization,
    position,
    biography,
    services,
    selectedDoctor.id,
    edit,
    fetchData,
    clearInputValues,
  ]);

  return (
    <div className="doctors-admin-panel">
      <section className="doctors-admin-panel-edit">
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="firstname">Անուն</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            ref={firstNameRef}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="lastname">Ազգանուն</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            ref={lastNameRef}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="patronymic">Հայրանուն</label>
          <input
            type="text"
            id="patronymic"
            value={patronymic}
            onChange={(e) => setPatronymic(e.target.value)}
            ref={patronymicRef}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="specialization">Մասնագիտություն</label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="position">Պաշտոն</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="services">Ծառայություն</label>
          <input
            type="text"
            id="services"
            value={services}
            onChange={(e) => setServices(e.target.value)}
          />
        </div>
        <div className="doctors-admin-panel-edit-row">
          <label htmlFor="biography">Կենսագրություն</label>
          <input
            type="text"
            id="biography"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
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
          setFirstName={setFirstName}
          setLastName={setLastName}
          setPatronymic={setPatronymic}
          setSpecialization={setSpecialization}
          setPosition={setPosition}
          setServices={setServices}
          setBiography={setBiography}
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
