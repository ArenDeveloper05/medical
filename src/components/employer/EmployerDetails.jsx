import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const EmployerDetails = ({biography,image}) => {
    return (
        <section id="doctor-1-details" className="doctor-details-section division">
          <div className="container">
            <div className="row">
              {/* DOCTOR PHOTO */}
              <div className="col-md-5">
                <div className="doctor-photo mb-40">
                  {/* Photo */}
                  <Image
                        className="img-fluid"
                        src={"/" + image}
                        alt="employer-foto"
                        layout="responsive"
                        objectFit="contain"
                        width={"100%"}
                        height={"100%"}
                    />
                  {/* Doctor Info */}
                  {/* End Doctor Info */}
                  {/* Doctor Contacts */}
                  <div className="doctor-contacts text-center">
                    <h4 className="h4-xs">
                      <i className="fas fa-mobile-alt" />
                      1-(800)-569-7890
                    </h4>
                    <h4 className="h4-xs blue-color">
                      <i className="fas fa-envelope-open-text" />
                      <Link href="#">
                        <a href="mailto:yourdomain@mail.com" className="blue-color">
                          hello@yourdomain.com
                        </a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              {/* END DOCTOR PHOTO */}
              {/* DOCTOR'S BIO */}
              <div className="col-md-7">
                <div className="doctor-bio">
                  {/* Text */}
                  <p>
                  {biography}
                  </p>
                </div>
              </div>
              {/* END DOCTOR BIO */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </section>
      );
}

export default EmployerDetails