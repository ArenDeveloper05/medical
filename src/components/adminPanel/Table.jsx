import { useEffect, useState } from "react";
import Loader from "./Loader";
import Modal from "./Modal";

const Table = ({
  data,
  loadDoctors,
  setDoctorData,
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
            data.map(({ dataValues }) => (
              <tr key={dataValues.id}>
                <td className="font-weight-normal">{dataValues.firstName}</td>
                <td className="font-weight-normal">{dataValues.lastName}</td>
                <td className="font-weight-normal">{dataValues.patronymic}</td>
                <td className="font-weight-normal">{dataValues.services}</td>
                <td className="font-weight-normal">
                  <button
                    className="rounded bg-danger button"
                    onClick={() => {
                      setDeleteDoctor((prev) => !prev);
                      setSelectedDoctor(dataValues);
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
                      setDoctorData({
                        firstName: dataValues.firstName,
                        lastName: dataValues.lastName,
                        patronymic: dataValues.patronymic,
                        specialization: dataValues.specialization,
                        position: dataValues.position,
                        services: dataValues.services,
                        biography: dataValues.biography,
                      });
                      edit && setEdit(false);
                      selectedDoctor !== dataValues &&
                        setSelectedDoctor(dataValues);
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
          selectedDoctor={selectedDoctor}
          fetchData={fetchData}
        />
      )}
    </>
  );
};

export default Table;
