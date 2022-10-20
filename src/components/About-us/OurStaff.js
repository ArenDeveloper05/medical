import React from 'react'
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const employersData = [
    {
        id: 1,
        fullName:"Jonathan Barnes D.M.",
        position:"Deputy director",
        img:"images/doctor-1.jpg",
        phone: "+374 93 555555",
        email: "test.test@gmail.com"
    },
    { 
        id: 2,
        fullName:"Hannah Harper D.M.",
        position:"Chief Medical Officer",
        img:"images/doctor-2.jpg",
        phone: "+374 93 555555",
        email: "test.test@gmail.com"
    },
    {
        id: 3,
        fullName:"Matthew Anderson D.M.",
        position:" Medical Officer",
        img:"images/doctor-3.jpg",
        phone: "+374 93 555555",
        email: "test.test@gmail.com"
    },
    {
        id: 4,
        fullName:"Megan Coleman D.M.",
        position:" Chief of Finance",
        img:"images/doctor-4.jpg",
        phone: "+374 93 555555",
        email: "test.test@gmail.com"
    },
]
const OurStaff = () => {
    const { t } = useTranslation('common');

  return (
        <section id="doctors-1" className="wide-40 doctors-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Title 	*/}
                        <h3 className="h3-md steelblue-color">
                            {t("aboutUs.title")}
                        </h3>
                    </div>
                </div>
                {/* END SECTION TITLE */}
                <div className="row">
                      {employersData && employersData.map((item) => 
                    <div className = "col-md-6 col-lg-3"
                    key = {item.id}
                    >
                     <div className="doctor-1" >
                     <div className="hover-overlay text-center">
                         <img
                             className="img-fluid"
                             src={item.img}
                             alt="doctor-foto"
                         />
                         <div className="item-overlay" />
                         <div className="profile-link">
                             <Link href={{
            pathname: `all-employers/${item.id}`,
            query: { fullName: item.fullName ,
                     position:item.position        
            },
          }}>
                                 <a
                                     className="btn btn-sm btn-tra-white black-hover"
                                 >
                                     View More Info
                                 </a>
                             </Link>
                         </div>
                     </div>
                     <div className="doctor-meta">
                         <h5 className="h5-sm steelblue-color">
                             {item.fullName}
                         </h5>
                         <span className="blue-color">
                             {item.position}
                         </span>
                        <div style={{
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                            marginTop:"5px"
                            }}>
                            <h6>{t("contactus.phone")}</h6>
                            <p>{item.phone}</p>
                        </div>
                        <div style={{
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                            marginTop:"5px"
                            }}>
                            <h6>{t("contactus.email")}</h6>
                            <p>{item.email}</p>
                        </div>
                     </div>
                 </div>
                </div>
                    )} 
                </div>
                {/* End row */}
                {/* ALL DOCTORS BUTTON */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="all-doctors mb-40">
                            <Link href="/all-doctors">
                                <a className="btn btn-blue blue-hover">
                                {t("aboutUs.button")}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End container */}
        </section>
    );
}

export default OurStaff