import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { APIUrl } from "../../DataServices";

const AllDoctorsCards = ({ doctorsData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      {doctorsData.map(({ ID, FirstName, LastName, Position, Picture }) => {
        return (
          <div className="col-md-6 col-lg-4 card-appear" key={ID}>
            <div className="doctor-2 shadow">
              <div className="hover-overlay">
                {Picture !== null ? (
                  <Image
                    className="img-fluid"
                    crossOrigin="anonymous"
                    loader={() => `${APIUrl}/images/doctors/${Picture}`}
                    src={`${APIUrl}/images/doctors/${Picture}`}
                    alt={`${FirstName}`}
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
                  <h5>{FirstName ? FirstName : ""}</h5>
                  <h5>{LastName ? LastName : ""}</h5>
                </div>
                <span>{Position ? Position : ""}</span>
                <Link
                  href={`/doctors/${
                    FirstName && LastName ? FirstName + LastName : ID
                  }?id=${ID}`}
                >
                  <a className="btn btn-sm btn-blue blue-hover mt-15">
                    {t("button-more")}
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
