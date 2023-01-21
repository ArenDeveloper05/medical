import React from "react";
import Image from "next/image";
import { APIUrl } from "../../DataServices";

const EmployerDetails = ({
  biography,
  image,
  employerLoading,
  singleEmployer,
}) => {
  return (
    <section id="doctor-1-details" className="doctor-details-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="doctor-photo mb-40">
              {!employerLoading && image !== null ? (
                <Image
                  loader={() => `${APIUrl}/images/doctors/${image}`}
                  crossOrigin="anonymous"
                  className="img-fluid card-appear"
                  src={`${APIUrl}/images/doctors/${image}`}
                  alt="doctor-foto"
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
              <div className="doctor-info load-appear">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>
                        {singleEmployer.FirstName
                          ? singleEmployer.FirstName
                          : ""}
                        {"    "}
                        {singleEmployer.LastName ? singleEmployer.LastName : ""}
                        {"    "}
                        {singleEmployer.Patronymic
                          ? singleEmployer.Patronymic
                          : ""}
                        {"    "}
                      </td>

                      <td>
                        {singleEmployer.Patronymic
                          ? singleEmployer.Position
                          : ""}{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="doctor-bio">
              <p>{biography}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerDetails;
