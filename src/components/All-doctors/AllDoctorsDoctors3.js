import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import useTranslation from "next-translate/useTranslation";

const AllDoctorsDoctors3 = ({ doctorsData }) => {
    const [doctorName, setDoctorName] = useState("");
    const [doctorSurname, setDoctorSurname] = useState("");
    const { t } = useTranslation('common');

    const getSearchedDoctor = useCallback(() => {
    }, [])
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
                            id='doctorName'
                            value={doctorName}
                            onChange={(e) => setDoctorName(e.target.value)}
                            className="doctor-search-input"
                        >
                        </input>

                        <input
                            type="text"
                            placeholder={t("doctorsearchfields.doctorSurname")}
                            id='doctorSurname'
                            value={doctorSurname}
                            onChange={(e) => setDoctorSurname(e.target.value)}
                            className="doctor-search-input"
                        >
                        </input>
                        <button
                            type="button"
                            onClick={getSearchedDoctor}
                            className="doctor-search-button"
                        >
                            {t("doctorsearchfields.searchButton")}
                        </button>
                    </div>
                </div>


                <div className="row">
                    {doctorsData &&
                        doctorsData.map(({ dataValues }, idx) => {
                            return (
                                <div className="col-md-6 col-lg-4" key={dataValues.id}>
                                    <div className="doctor-2">
                                        <div className="hover-overlay">
                                            <img
                                                className="img-fluid"
                                                src={"images/doctor-1.jpg"}
                                                alt="doctor-foto"
                                            />
                                            {/* this part of code is for testing and for future changes */}
                                            {/* <Image
                                                    className="img-fluid"
                                                    src={`/` + doctor.src}
                                                    alt={doctor.name}
                                                    width={306}
                                                    height={349}
                                                /> */}
                                            {/* this part of code is for testing and for future changes */}
                                        </div>
                                        <div className="doctor-meta">
                                            <h5 className="h5-xs blue-color">
                                                {dataValues.firstName}{dataValues.lastName}
                                            </h5>
                                            <span>{dataValues.position}</span>
                                            <Link href={`/all-doctors/${dataValues.firstName}?idx=${dataValues.id}`}>
                                                <a
                                                    className="btn btn-sm btn-blue blue-hover mt-15"
                                                    title
                                                >
                                                    View More Info
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    );
};

export default AllDoctorsDoctors3;
