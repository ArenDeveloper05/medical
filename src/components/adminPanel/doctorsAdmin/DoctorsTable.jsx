import useTranslation from "next-translate/useTranslation";
import { useState, memo } from "react";
import Modal from "../Modal";
import Loader from "../Loader";
import { generateLanguage } from "../../../utils";
import { deleteSingleDoctor, getDoctorsLength } from "../../../DataServices";

const DoctorsTable = ({
  data,
  setDoctorData,
  loadDoctors,
  edit,
  setEdit,
  selectedDoctor,
  setSelectedDoctor,
  getPageDoctors,
  deleteError,
  setDeleteError,
  selectedPage,
  setSelectedPage,
  itemsPerPage,
  dataLength,
  setDataLength,
  clearInputValues,
}) => {
  const [deleteDoctor, setDeleteDoctor] = useState(false);
  const { lang } = useTranslation("common");

  const removeDoctor = async () => {
    try {
      await deleteSingleDoctor(
        {
          firstName: selectedDoctor.firstName,
          lastName: selectedDoctor.lastName,
          patronymic: selectedDoctor.patronymic,
          specialization: selectedDoctor.specialization,
          position: selectedDoctor.position,
          services: selectedDoctor.services,
          biography: selectedDoctor.biography,
          lang: generateLanguage(lang),
        },
        selectedDoctor.id
      );
      const length = await getDoctorsLength();
      setDataLength(length.data.data);
      if (data.length === 1 && selectedPage.page > 1) {
        //If selected page is 3,in my page is only one doctor and i delete doctor, my selected page will change to 2
        setSelectedPage((prev) => {
          return {
            page: prev.page - 1,
            request: true,
          };
        });
      } else {
        await getPageDoctors(selectedPage.page, itemsPerPage);
      }

      setDeleteDoctor((prev) => !prev);
      clearInputValues();
      !edit && setEdit(true);
    } catch (error) {
      console.log(error, "Modal error");
      if (error.response) {
        if (error.response.statusText == "Unauthorized") {
          localStorage.removeItem("token");
          location.reload();
        }
      }

      setDeleteError(true);
      setDeleteDoctor((prev) => !prev);
    }
  };

  return (
    <>
      <table
        className="table table-striped"
        style={{ maxWidth: "800px", marginTop: "62px" }}
      >
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
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
            data.length !== 0 &&
            data.map(
              ({
                ID,
                StaffGroup,
                Biography,
                FirstName,
                LastName,
                Patronymic,
                Position,
                Services,
                Specialization,
                Picture,
              }) => {
                return (
                  <tr key={ID}>
                    <td className="font-weight-normal">{ID ? ID : ""}</td>
                    <td className="font-weight-normal">
                      {FirstName ? FirstName : ""}
                    </td>
                    <td className="font-weight-normal">
                      {LastName ? LastName : ""}
                    </td>
                    <td className="font-weight-normal">
                      {Patronymic ? Patronymic : ""}
                    </td>
                    <td className="font-weight-normal">
                      {Services ? Services : ""}
                    </td>
                    <td className="font-weight-normal">
                      <button
                        className="rounded bg-danger button"
                        onClick={() => {
                          setDeleteDoctor((prev) => !prev);
                          setSelectedDoctor({
                            ...{
                              FirstName,
                              LastName,
                              Patronymic,
                              Services,
                              Specialization,
                              Position,
                              Services,
                              Biography,
                              Picture,
                            },
                            id: ID,
                          });
                        }}
                      >
                        Ջնջել
                      </button>
                    </td>
                    <td className="font-weight-normal">
                      <button
                        className="rounded button edit-button"
                        onClick={() => {
                          setDoctorData({
                            firstName: FirstName ? FirstName || "" : "",
                            lastName: LastName ? LastName || "" : "",
                            patronymic: Patronymic ? Patronymic || "" : "",
                            specialization: Specialization
                              ? Specialization || ""
                              : "",
                            position: Position ? Position || "" : "",
                            services: Services ? Services || "" : "",
                            staffGroup: StaffGroup == 1 ? true : false,
                            picture: Picture ? Picture || "" : "",
                            biography:
                              Biography !== null || Biography !== undefined
                                ? Biography || ""
                                : "",
                          });
                          edit && setEdit(false);
                          selectedDoctor !==
                            {
                              firstName: FirstName,
                              lastName: LastName,
                              patronymic: Patronymic,
                              services: Services,
                              specialization: Specialization,
                              position: Position,
                              services: Services,
                              biography: Biography,
                              picture: Picture,
                            } &&
                            setSelectedDoctor({
                              firstName: FirstName ? FirstName || "" : "",
                              lastName: LastName ? LastName || "" : "",
                              patronymic: Patronymic ? Patronymic || "" : "",
                              specialization: Specialization
                                ? Specialization || ""
                                : "",
                              position: Position ? Position || "" : "",
                              services: Services ? Services || "" : "",
                              staffGroup: StaffGroup ? StaffGroup || "" : "",
                              picture: Picture ? Picture || "" : "",
                              biography:
                                Biography !== null || Biography !== undefined
                                  ? Biography || ""
                                  : "",

                              id: ID,
                            });
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Խմբագրել
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
      {loadDoctors && <Loader />}
      {deleteDoctor && (
        <Modal
          text={`Դուք վստա՞հ եք, որ ցանկանում եք ջնջել ${selectedDoctor.FirstName} ${selectedDoctor.LastName}-ին բժիշկների ցանկից`}
          setModalOpen={setDeleteDoctor}
          removeItem={removeDoctor}
        />
      )}
    </>
  );
};

export default memo(DoctorsTable);
