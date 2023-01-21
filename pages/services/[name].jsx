import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import {
  APIUrl,
  getSingleDoctor,
  getSingleService,
} from "../../src/DataServices";
import Layout from "../../src/layout/Layout";
import { generateLanguage } from "../../src/utils";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import Loader from "../../src/components/adminPanel/Loader";
import MedLoader from "../../src/components/MedLoader";

const Service = () => {
  const { query } = useRouter();
  const { t, lang } = useTranslation("common");
  const [doctorsList, setDoctorsList] = useState([]);
  const [serviceInfo, setServiceInfo] = useState({});
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log(doctorsList, "array of Doctors");
  // }, [doctorsList]);

  useEffect(() => {
    let doctors = [];
    async function fetchInfo() {
      setLoading(true);
      try {
        const {
          data: { data },
        } = await getSingleService(generateLanguage(lang), Number(query.id));
        setServiceInfo(data[0][0]);
        const IdList = data[0][0].DoctorsIdList;
        if (IdList && IdList.length !== 0) {
          for (let i = 0; i < IdList.length; i++) {
            const doctorId = IdList[i];
            const {
              data: { data },
            } = await getSingleDoctor(generateLanguage(lang), Number(doctorId));
            const doctorResponse = data[0][0];
            doctorResponse && doctors.push(doctorResponse);
          }
          setDoctorsList(() => {
            return [...doctors];
          });
        } else {
          setDoctorsList(() => {
            return [];
          });
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchInfo();
  }, [lang, query.id]);

  return (
    <Layout>
      <section id="tabs-2" className="wide-100 tabs-section division">
        <div className="container">
          {loading && <MedLoader />}
          <div className="row">
            <div className="col-lg-4">
              <div
                className="list-group text-center clearfix"
                style={{ minHeight: "300px" }}
              >
                {loading && <MedLoader />}
                {!loading && <h3>{t("header-doctors")}</h3>}
                {doctorsList.length !== 0 &&
                  !loading &&
                  doctorsList &&
                  doctorsList.map((item) => {
                    if (item !== undefined && item !== null) {
                      return (
                        <div
                          className="shadow card-appear"
                          style={{ transform: "scale(0.85" }}
                          key={uuid()}
                        >
                          <div className="doctor-2" style={{ margin: "0" }}>
                            <div className="hover-overlay">
                              {item.Picture !== null ? (
                                <Image
                                  className="img-fluid"
                                  crossOrigin="anonymous"
                                  loader={() =>
                                    `${APIUrl}/images/doctors/${item.Picture}`
                                  }
                                  src={`${APIUrl}/images/doctors/${item.Picture}`}
                                  alt={`${
                                    item.FirstName ? item.FirstName : ""
                                  }`}
                                  layout="responsive"
                                  objectFit="cover"
                                  width={"100%"}
                                  height={"100%"}
                                />
                              ) : (
                                <Image
                                  className="img-fluid card-appear"
                                  src={`/images/no-image.jpg`}
                                  alt="doctor-foto"
                                  layout="responsive"
                                  objectFit="cover"
                                  width={"100%"}
                                  height={"100%"}
                                />
                              )}
                            </div>
                            <div className="doctor-meta">
                              <div className="h5-xs blue-color">
                                <h5>{item.FirstName ? item.FirstName : ""}</h5>
                                <h5>{item.LastName ? item.LastName : ""}</h5>
                              </div>
                              <span>{item.Position ? item.Position : ""}</span>
                              <Link
                                href={`/doctors/${
                                  item.FirstName && item.LastName
                                    ? item.FirstName + item.LastName
                                    : item.ID
                                }?id=${item.ID}`}
                              >
                                <a className="btn btn-sm btn-blue blue-hover mt-15">
                                  View More Info
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
            <div className="col-lg-8 card-appear">
              {!loading && (
                <h1>
                  {serviceInfo &&
                  serviceInfo.Name !== null &&
                  serviceInfo.Name !== undefined
                    ? serviceInfo.Name
                    : ""}
                </h1>
              )}

              {!loading &&
                parse(
                  serviceInfo.Description !== null &&
                    serviceInfo.Description !== undefined
                    ? serviceInfo.Description
                    : ""
                )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Service;
