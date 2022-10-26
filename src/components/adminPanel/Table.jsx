import { useEffect, useState } from "react";
import Loader from "./Loader";
import Modal from "./Modal";

const Table = ({
  data,
  loadDoctors,
  setFirstName,
  setLastName,
  setPatronymic,
  setSpecialization,
  setPosition,
  setServices,
  setBiography,
  edit,
  setEdit,
  selectedDoctor,
  setSelectedDoctor,
  fetchData,
}) => {
  const [deleteDoctor, setDeleteDoctor] = useState(false);

  return (
    <>
      <table
        className="table table-striped"
        style={{ maxWidth: "800px", marginTop: "62px" }}
      >
        <thead className="thead-dark">
          <tr>
            <th>Անուն</th>
            <th>Ազգանուն</th>
            <th>Հայրանուն</th>
            <th>Ծառայություն</th>
            <th>Ջնջել</th>
            <th>Խմբագրել</th>
          </tr>
        </thead>
        <tbody>
          {!loadDoctors &&
            data &&
            data.map((item) => (
              <tr key={item.dataValues.id}>
                <td className="font-weight-normal">
                  {item.dataValues.firstName}
                </td>
                <td className="font-weight-normal">
                  {item.dataValues.lastName}
                </td>
                <td className="font-weight-normal">
                  {item.dataValues.patronymic}
                </td>
                <td className="font-weight-normal">
                  {item.dataValues.services}
                </td>
                <td className="font-weight-normal">
                  <button
                    className="rounded bg-danger button"
                    onClick={() => {
                      setDeleteDoctor((prev) => !prev);
                      setSelectedDoctor(item.dataValues);
                    }}
                  >
                    Ջնջել
                  </button>
                </td>
                <td className="font-weight-normal">
                  <button
                    className="rounded button edit-button"
                    onClick={() => {
                      // change input values
                      setFirstName(item.dataValues.firstName);
                      setLastName(item.dataValues.lastName);
                      setPatronymic(item.dataValues.patronymic);
                      setSpecialization(item.dataValues.specialization);
                      setPosition(item.dataValues.position);
                      setServices(item.dataValues.services);
                      setBiography(item.dataValues.biography);
                      edit && setEdit(false);
                      selectedDoctor !== item.dataValues &&
                        setSelectedDoctor(item.dataValues);
                    }}
                  >
                    Խմբագրել
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {loadDoctors && <Loader />}
      {deleteDoctor && (
        <Modal
          text={`Դուք վստա՞հ եք, որ ցանկանում եք ջնջել ${selectedDoctor.firstName} ${selectedDoctor.lastName}-ին բժիշկների ցանկից`}
          setDeleteDoctor={setDeleteDoctor}
          doctor={selectedDoctor}
          fetchData={fetchData}
        />
      )}
    </>
  );
};

export default Table;
