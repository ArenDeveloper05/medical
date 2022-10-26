import { useCallback } from "react";
import { deleteDoctor } from "../../DataServices";

const Modal = ({ text, setDeleteDoctor, doctor, fetchData }) => {
  const removeDoctor = useCallback(async () => {
    try {
      const data = await deleteDoctor(
        {
          firstName: doctor.firstName,
          lastName: doctor.lastName,
          patronymic: doctor.patronymic,
          specialization: doctor.specialization,
          position: doctor.position,
          services: doctor.services,
          biography: doctor.biography,
        },
        doctor.id
      );

      setDeleteDoctor((prev) => !prev);
      fetchData();
      return data;
    } catch (error) {
      console.log(error, "Modal error");
    }
  }, [doctor, setDeleteDoctor, fetchData]);

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
