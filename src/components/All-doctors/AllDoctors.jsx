import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Loader from "../adminPanel/Loader";
import { generateLanguage } from "../../utils";
import { searchDoctor } from "../../DataServices";

const AllDoctors = ({
  doctorsData,
  setDoctorsData,
  doctorsDataLoading,
  setDoctorsDataLoading,
  doctorsDataError,
  setDoctorsDataError,
  setDataLength,
  setSelectedPage,
}) => {
  const [searchedDoctor, setSearchedDoctor] = useState({
    fName: "",
    lName: "",
  });

  const [searchValidation, setSearchValidation] = useState({
    fName: true,
    lName: true,
  });

  const { t, lang } = useTranslation("common");

  const getSearchedDoctor = () => {
    setDoctorsDataLoading(true);
    async function fetchSearchData() {
      try {
        const {
          data: { data },
        } = await searchDoctor(generateLanguage(lang), searchedDoctor);
        console.log("data", data[0]);
        data[0].length &&
          setSelectedPage({
            page: 1,
            request: false,
          });
        setDoctorsData(data[0]);
        setDataLength(data[0].length);
        doctorsDataError && setDoctorsDataError(false);
      } catch (error) {
        console.log(error);
        setDoctorsDataError(true);
      }
      setDoctorsDataLoading(false);
    }
    fetchSearchData();
  };

  return (
    <section
      id="doctors-3"
      className="bg-lightgrey wide-60 doctors-section division"
    >
      <div className="container">
        <div className="doctor-search-container">
          <div className="doctors-search">
            <input
              type="text"
              placeholder={t("doctorsearchfields.doctorName")}
              id="doctorName"
              style={
                !searchValidation.fName && !searchValidation.fName
                  ? { border: "1px solid red" }
                  : {}
              }
              value={searchedDoctor.fName}
              onChange={(e) =>
                setSearchedDoctor((prev) => {
                  return {
                    ...prev,
                    fName: e.target.value,
                  };
                })
              }
              className="doctor-search-input"
            ></input>

            <input
              type="text"
              placeholder={t("doctorsearchfields.doctorSurname")}
              id="doctorSurname"
              style={
                !searchValidation.fName && !searchValidation.lName
                  ? { border: "1px solid red" }
                  : {}
              }
              value={searchedDoctor.lName}
              onChange={(e) =>
                setSearchedDoctor((prev) => {
                  return {
                    ...prev,
                    lName: e.target.value,
                  };
                })
              }
              className="doctor-search-input"
            ></input>
            <button
              type="button"
              onClick={() => {
                if (
                  !searchedDoctor.fName.trim() &&
                  !searchedDoctor.lName.trim()
                ) {
                  setSearchValidation(() => {
                    return {
                      fName: false,
                      lName: false,
                    };
                  });
                } else {
                  setSearchValidation(() => {
                    return {
                      fName: true,
                      lName: true,
                    };
                  });
                }
                if (
                  searchedDoctor.fName.trim() ||
                  searchedDoctor.lName.trim()
                ) {
                  getSearchedDoctor();
                }
              }}
              className="doctor-search-button"
            >
              {t("doctorsearchfields.searchButton")}
            </button>
          </div>
        </div>

        <div className="row" style={{ minHeight: "100vh" }}>
          {doctorsDataLoading && (
            <div style={{ minHeight: "200px" }}>
              <Loader />
            </div>
          )}
          {!doctorsDataLoading && doctorsData.length === 0 && (
            <div>
              <h1>Ոչինչ չի գտնվել</h1>
            </div>
          )}
          {!doctorsDataError &&
            doctorsData &&
            !doctorsDataLoading &&
            doctorsData.map(
              ({ ID, FirstName, LastName, Position, Picture }) => {
                return (
                  <div className="col-md-6 col-lg-4 " key={ID}>
                    <div className="doctor-2 shadow">
                      <div className="hover-overlay">
                        <Image
                          className="img-fluid"
                          // src={`/` + Picture}
                          src={"/images/doctor-3.jpg"}
                          alt={`${FirstName}`}
                          layout="responsive"
                          objectFit="contain"
                          width={"100%"}
                          height={"100%"}
                        />
                      </div>
                      <div className="doctor-meta">
                        <div className="h5-xs blue-color">
                          <h5>{FirstName ? FirstName : ""}</h5>
                          <h5>{LastName ? LastName : ""}</h5>
                        </div>
                        <span>{Position ? Position : ""}</span>
                        <Link
                          href={`/all-doctors/${
                            FirstName && LastName ? FirstName + LastName : ID
                          }?id=${ID}`}
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
            )}
          {doctorsDataError && <div>Something went wrong</div>}
        </div>
      </div>
    </section>
  );
};

export default AllDoctors;
