import parse from "html-react-parser";
import Image from "next/image";
import { APIUrl } from "../../DataServices";
import MedLoader from "../MedLoader";

const DoctorDetails = ({ singleDoctor, singleDoctorLoading }) => {
  console.log(singleDoctor);
  return (
    <section id="doctor-1-details" className="doctor-details-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="doctor-photo mb-40">
              {!singleDoctorLoading && singleDoctor.Picture !== null ? (
                <Image
                  loader={() =>
                    `${APIUrl}/images/doctors/${singleDoctor.Picture}`
                  }
                  crossOrigin="anonymous"
                  className="img-fluid card-appear"
                  src={`${APIUrl}/images/doctors/${singleDoctor.Picture}`}
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
                        {singleDoctor.FirstName ? singleDoctor.FirstName : ""}{" "}
                        {singleDoctor.LastName ? singleDoctor.LastName : ""}{" "}
                        {singleDoctor.Patronymic ? singleDoctor.Patronymic : ""}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Areas of Expertise</td>
                      <td>
                        <span>
                          <i className="fas fa-angle-double-right" />
                          Neurology
                        </span>
                        <span>
                          <i className="fas fa-angle-double-right" />
                          Immunology
                        </span>
                        <span>
                          <i className="fas fa-angle-double-right" />
                          Internal Medicine
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Language(s)</td>
                      <td>English / Spanish / German</td>
                    </tr>
                    <tr className="last-tr">
                      <td>Work Days</td>
                      <td>Tuesday - Thursday</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="doctor-bio ">
              <div className="card-appear">
                {singleDoctor.Biography && parse(singleDoctor.Biography)}
              </div>
              {singleDoctorLoading && <MedLoader />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
