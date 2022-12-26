import parse from "html-react-parser";
import Image from "next/image";
import MedLoader from "../MedLoader";

const DoctorDetails = ({ singleDoctor, singleDoctorLoading }) => {
  return (
    <section id="doctor-1-details" className="doctor-details-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="doctor-photo mb-40">
              {!singleDoctorLoading && (
                <Image
                  className="img-fluid card-appear"
                  src="/images/dc1e402e9f6d3bccebcce5f6a3e4ef96"
                  alt="doctor-foto"
                  layout="responsive"
                  objectFit="contain"
                  width={"100%"}
                  height={"100%"}
                />
              )}
              <div className="doctor-info load-appear">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>{typeof singleDoctor.Picture}</td>
                      <td>M.D. of Medicine</td>
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
