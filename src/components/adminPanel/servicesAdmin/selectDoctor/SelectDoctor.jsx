import useTranslation from "next-translate/useTranslation";
import { useEffect, useState, memo } from "react";
import uuid from "react-uuid";
import { getAllDoctors } from "../../../../DataServices";
import { generateLanguage } from "../../../../utils";
import Loader from "../../Loader";
import SelectCheckbox from "./SelectCheckbox";

const SelectDoctor = ({ setClickableServiceData, clickableServiceData }) => {
  const { lang } = useTranslation("common");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAllDoctors() {
      setLoading(true);
      try {
        const {
          data: { data },
        } = await getAllDoctors(generateLanguage(lang));
        setDoctors(data[0]);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchAllDoctors();
  }, []);

  return (
    <div style={{ margin: "auto", width: "max-content" }}>
      <label htmlFor="select-doctor" style={{ marginTop: "32px" }}>
        <h5 className="field-color">Ընտրեք բժիշկներին</h5>
      </label>
      <ul style={{ height: "300px", overflow: "auto" }} id="select-doctor">
        {doctors.length !== 0 &&
          doctors.map((doctor) => {
            return (
              <SelectCheckbox
                item={doctor}
                key={uuid()}
                clickableServiceData={clickableServiceData}
                setClickableServiceData={setClickableServiceData}
              />
            );
          })}
        {loading && <Loader />}
      </ul>
    </div>
  );
};

export default memo(SelectDoctor);
