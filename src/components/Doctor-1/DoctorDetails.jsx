import parse from "html-react-parser";
import Loader from "../adminPanel/Loader";
import Image from "next/image";

const DoctorDetails = ({ singleDoctor, singleDoctorLoading }) => {
  return (
    <section id="doctor-1-details" className="doctor-details-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="doctor-photo mb-40">
              <Image
                className="img-fluid"
                src="/images/doctor-3.jpg"
                alt="doctor-foto"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"100%"}
              />
              <div className="doctor-info">
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
          {singleDoctorLoading && <Loader />}
          <div className="col-md-7">
            <div className="doctor-bio">
              <div>
                {singleDoctor.Biography && parse(singleDoctor.Biography)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
