import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AllDoctorsDoctors3 = ({ doctorsData }) => {
    const [doctorsTest, setDoctorsTest] = useState([{ name: "Doktor 1", src: "images/doctor-1.jpg" }, { name: "Doktor 2", src: "images/doctor-2.jpg" }, { name: "Doktor 3", src: "images/doctor-3.jpg" }]);
    console.log(doctorsData, "uraa");
    return (
        <section
            id="doctors-3"
            className="bg-lightgrey wide-60 doctors-section division"
        >
            <div className="container">
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
                                            <Link href={`/all-doctors/${idx}?name=${dataValues.firstName}`}>
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
