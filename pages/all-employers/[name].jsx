import React from "react";
import { useRouter } from "next/router";
import Layouts from "../../src/layout/Layout";
import EmployerDetails from "../../src/components/employer/EmployerDetails";
import useTranslation from "next-translate/useTranslation";
import { getSingleDoctor } from "../../src/DataServices";
import { useState, useCallback, useEffect } from "react";
import { generateLanguage } from "../../src/utils";
import parse from "html-react-parser";

const SingleEmployer = () => {
  const [singleEmployerData, SetSingleEmployerData] = useState({});
  const [employerLoading, setEmployerLoading] = useState(false);
  const router = useRouter();
  const { idx } = router.query;
  const { t, lang } = useTranslation("common");

  const getSingleEmployerData = useCallback(async (lang, idx) => {
    setEmployerLoading(true);
    try {
      const {
        data: { data },
      } = await getSingleDoctor(lang, idx);
      SetSingleEmployerData(data[0][0]);
      console.log(singleEmployerData);
    } catch (error) {
      console.log(error, "chekav");
    }
    setEmployerLoading(false);
  }, []);

  useEffect(() => {
    getSingleEmployerData(generateLanguage(lang), idx);
  }, []);

  return (
    <Layouts>
      <section
        id="doctor-breadcrumbs"
        className="bg-fixed doctor-details-section division"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7 offset-md-5">
              <div className="doctor-data white-color">
                <h2 className="h2-xs">
                  {" "}
                  {singleEmployerData.FirstName} {singleEmployerData.LastName}{" "}
                  {singleEmployerData.Patronymic}
                </h2>
                <h5 className="h5-md">{singleEmployerData.Position}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EmployerDetails
        biography={
          singleEmployerData.Biography && parse(singleEmployerData.Biography)
        }
        singleEmployer={singleEmployerData}
        image={singleEmployerData.Picture}
        employerLoading={employerLoading}
      />
    </Layouts>
  );
};

export default SingleEmployer;
