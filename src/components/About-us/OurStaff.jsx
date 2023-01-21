import React, { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { APIUrl, searchEmployer } from "../../DataServices";
import { generateLanguage } from "../../utils";
import Image from "next/image";

const OurStaff = () => {
  const { t, lang } = useTranslation("common");
  const [employerData, setEmployerData] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  const mappedData = seeAll ? employerData : employerData.slice(0, 4);

  const fetchData = useCallback(async () => {
    try {
      const {
        data: { data },
      } = await searchEmployer(generateLanguage(lang));
      setEmployerData(data[0]);
    } catch (error) {
      console.log(error);
    }
  }, [lang]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="doctors-1" className="wide-40 doctors-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            {/* Title 	*/}
            <h3 className="h3-md steelblue-color">{t("aboutUs.title")}</h3>
          </div>
        </div>
        {/* END SECTION TITLE */}
        <div className="row">
          {mappedData &&
            mappedData.map((item, idx) => {
              return (
                <div className="col-md-6 col-lg-3" key={item.ID}>
                  <div className="doctor-1">
                    <div className="hover-overlay text-center">
                      {item.Picture !== null ? (
                        <Image
                          className="img-fluid"
                          crossOrigin="anonymous"
                          loader={() =>
                            `${APIUrl}/images/doctors/${item.Picture}`
                          }
                          src={`${APIUrl}/images/doctors/${item.Picture}`}
                          alt={`${item.FirstName ? item.FirstName : ""}`}
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
                      <div className="item-overlay" />
                      <div className="profile-link">
                        <Link
                          href={`/all-employers/${item.FirstName}?idx=${item.ID}`}
                        >
                          <a className="btn btn-sm btn-tra-white black-hover">
                            {t("button-more")}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="doctor-meta">
                      <h5 className="h5-sm steelblue-color">
                        {item.LastName ? item.LastName : ""}
                        {item.FirstName ? item.FirstName : ""}
                        {item.Patronymic ? item.Patronymic : ""}
                      </h5>
                      <span className="blue-color">{item.Position}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {/* End row */}
        {/* ALL DOCTORS BUTTON */}
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="all-doctors mb-40">
              <button
                className="btn btn-blue blue-hover"
                onClick={() => {
                  setSeeAll((prev) => !prev);
                }}
              >
                {!seeAll ? t("aboutUs.button") : "Փակել"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>
  );
};

export default OurStaff;
