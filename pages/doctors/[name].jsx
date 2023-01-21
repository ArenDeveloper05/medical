import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import DoctorDetails from "../../src/components/Doctor-1/DoctorDetails";
import { getSingleDoctor } from "../../src/DataServices";
import Layout from "../../src/layout/Layout";
import { generateLanguage } from "../../src/utils";

const SingleDoctor = () => {
  const { query } = useRouter();
  const { lang } = useTranslation("common");
  const [singleDoctorLoading, setSingleDoctorLoading] = useState(false);
  const [singleDoctor, setSingleDoctor] = useState([{}]);

  useEffect(() => {
    async function fetchSingleDoctor() {
      setSingleDoctorLoading(true);
      try {
        const {
          data: { data },
        } = await getSingleDoctor(generateLanguage(lang), query.id);
        console.log(data[0][0]);
        setSingleDoctor(data[0][0]);
      } catch (error) {
        console.log(error);
      }
      setSingleDoctorLoading(false);
    }
    fetchSingleDoctor();
  }, []);

  return (
    <Layout>
      <section
        id="doctor-breadcrumbs"
        className="bg-fixed doctor-details-section division"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7 offset-md-5">
              <div className="doctor-data white-color card-appear">
                <h2 className="h2-xs">
                  {singleDoctor.FirstName ? singleDoctor.FirstName : ""}{" "}
                  {singleDoctor.FirstName ? singleDoctor.LastName : ""}
                </h2>
                <h5 className="h5-md">
                  {singleDoctor.Position ? singleDoctor.Position : ""}
                  {!singleDoctorLoading && " / "}
                  {singleDoctor.Services ? singleDoctor.Services : ""}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DoctorDetails
        singleDoctor={singleDoctor}
        singleDoctorLoading={singleDoctorLoading}
      />
    </Layout>
  );
};

export default SingleDoctor;
