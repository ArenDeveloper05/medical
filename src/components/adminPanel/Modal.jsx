import { deleteDoctor } from "../../DataServices";

const Modal = ({ text, setDeleteDoctor, selectedDoctor, fetchData }) => {
  const removeDoctor = async () => {
    try {
      const data = await deleteDoctor(
        {
          firstName: selectedDoctor.firstName,
          lastName: selectedDoctor.lastName,
          patronymic: selectedDoctor.patronymic,
          specialization: selectedDoctor.specialization,
          position: selectedDoctor.position,
          services: selectedDoctor.services,
          biography: selectedDoctor.biography,
        },
        selectedDoctor.id
      );

      setDeleteDoctor((prev) => !prev);
      fetchData();

      return data;
    } catch (error) {
      console.log(error, "Modal error");
    }
  };

  return (
    <div className="modal-parent">
      <div className="modal">
        <h5>{text}</h5>
        <div className="modal-buttons">
          <button className="button rounded bg-danger" onClick={removeDoctor}>
            Ջնջել
          </button>
          <button
            className="button rounded cancel-button"
            onClick={() => setDeleteDoctor((prev) => !prev)}
          >
            Ոչ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
