import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const AllDoctorsCards = ({ doctorsData }) => {
  return (
    <>
      {doctorsData.map(({ ID, FirstName, LastName, Position, Picture }) => {
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
      })}
    </>
  );
};

export default memo(AllDoctorsCards);