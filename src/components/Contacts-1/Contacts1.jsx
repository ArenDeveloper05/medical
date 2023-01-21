import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const Contacts1 = () => {
  const { t } = useTranslation('common');
  return (
    <section id="contacts-1" className="wide-60 contacts-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row contact-info">
          {/* CONTACTS INFO */}
          {/* <div className="col-md-5 col-lg-4"> */}
            {/* General Information */}
            <div className="contact-box mb-40">
              <h5 className="h5-sm steelblue-color"> {t("contactus.section1.title")}</h5>
              <p>121 King Street, Melbourne,</p>
              <p>Victoria 3000 Australia</p>
              <p>{t("contactus.phone")} +12 9 8765 4321</p>
              <p>
              {t("contactus.email")}
                <Link href="#">
                  <a href="mailto:yourdomain@mail.com" className="blue-color">
                    hello@yourdomain.com
                  </a>
                </Link>
              </p>
            </div>
            {/* Patient Experience */}
            <div className="contact-box mb-40">
              <h5 className="h5-sm steelblue-color">{t("contactus.section2.title")}</h5>
              <p>{t("contactus.section2.cordinator")}</p>
              <p>{t("contactus.phone")} +12 9 8765 4321</p>
              <p>
              {t("contactus.email")}
                <Link href="#">
                  <a href="mailto:yourdomain@mail.com" className="blue-color">
                    hello@yourdomain.com
                  </a>
                </Link>
              </p>
            </div>
            {/* Working Hours */}
            <div className="contact-box mb-40">
              <h5 className="h5-sm steelblue-color">{t("contactus.section3.title")}</h5>
              <p>{t("contactus.section3.monday-friday")} 8:00 AM - 8:00 PM</p>
              <p>{t("contactus.section3.saturday")} 10:00 AM - 6:00 PM</p>
              <p>{t("contactus.section3.sunday")} 10:00 AM - 4:00 PM</p>
            </div>
          {/* </div> */}
          {/* END CONTACTS INFO */}
          {/* CONTACT FORM */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Contacts1;
