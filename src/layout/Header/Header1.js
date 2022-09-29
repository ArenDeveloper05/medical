import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import uuid from "react-uuid";
import MobileMenu from "../MobileMenu";


const Header1 = ({ toggleMenu, toggle }) => {
  const { t } = useTranslation('common');
  const [images] = useState([{ locale: 'hy', src: "/images/am-flag.webp" }, { locale: 'ru', src: "/images/rs-flag.webp" }, { locale: 'en', src: "/images/us-flag.webp" }]);

  return (
    <header id="header" className="header">
      {/* MOBILE HEADER */}
      <div className="wsmobileheader clearfix">
        <Link href="#">
          <a
            id="wsnavtoggle"
            onClick={() => toggleMenu()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </Link>
        <span className="smllogo">
          <img
            src="images/logo.png"
            width={180}
            height={40}
            alt="mobile-logo"
          />
        </span>
        <Link href="#">
          <a href="tel:123456789" className="callusbtn">
            <i className="fas fa-phone" />
          </a>
        </Link>
      </div>
      {/* HEADER STRIP */}
      <div className="headtoppart bg-blue clearfix">
        <div className="headerwp clearfix">
          {/* Address */}
          <div className="headertopleft">
            <div className="address clearfix">
              <span>
                <i className="fas fa-map-marker-alt" />
                121 King St, Melbourne, VIC 3000
              </span>
              <Link href="#">
                <a href="tel:123456789" className="callusbtn">
                  <i className="fas fa-phone" />
                  (800)-569-7890
                </a>
              </Link>
            </div>
          </div>
          {/* Social Links */}
          <div className="headertopright">
            <a className="googleicon" title="Google" href="#">
              <i className="fab fa-google" />
              <span className="mobiletext02">Google</span>
            </a>
            <a className="linkedinicon" title="Linkedin" href="#">
              <i className="fab fa-linkedin-in" />
              <span className="mobiletext02">Linkedin</span>
            </a>
            <a className="twittericon" title="Twitter" href="#">
              <i className="fab fa-twitter" />
              <span className="mobiletext02">Twitter</span>
            </a>
            <a className="facebookicon" title="Facebook" href="#">
              <i className="fab fa-facebook-f" />
              <span className="mobiletext02">Facebook</span>
            </a>
          </div>
        </div>
      </div>
      {/* END HEADER STRIP */}
      {/* NAVIGATION MENU */}
      <div className="wsmainfull menu clearfix d-none d-lg-block">
        <div className="wsmainwp clearfix">
          {/* LOGO IMAGE */}
          {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
          <div className="desktoplogo">
            <a href="#">
              <img
                src="images/logo.png"
                width={180}
                height={40}
                alt="header-logo"
              />
            </a>
          </div>
          {/* MAIN MENU */}
          <nav className="wsmenu clearfix">
            <ul className="wsmenu-list d-flex justify-content-center align-items-center">
              {/* HOME*/}
              <li>
                <Link href="/">
                  <a>
                    {t("header-home")}
                  </a>
                </Link>
              </li>
              {/* END HOME */}
              {/* ABOUT US */}
              <li className="nl-about-us">
                <Link href="/about-us">
                  <a>
                    {t("header-aboutus")}
                  </a>
                </Link>
              </li>
              {/* END ABOUT US */}
              {/* NEWS */}
              <li className="nl-news">
                <Link href="/blog-listing">
                  <a>
                    {t("header-news")}
                  </a>
                </Link>
              </li>
              {/* END NEWS */}
              {/* DOCTORS */}
              <li className="nl-doctors">
                <Link href="/all-doctors">
                  <a>
                    {t("header-doctors")}
                  </a>
                </Link>
              </li>
              {/* END DOCTORS */}
              {/* GALLERY */}
              <li className="nl-gallery" >
                <Link href="/gallery">
                  <a>
                    {t("header-gallery")}
                  </a>
                </Link>
              </li>
              {/* END GALLERY */}
              <li>
                <a href="#">
                  Pages <span className="wsarrow" />
                </a>
                <div className="wsmegamenu clearfix">
                  <div className="container">
                    <div className="row">
                      {/* MEGAMENU LINKS */}
                      <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Standard Pages:</li>
                        <li>
                          <Link href="/about-us">
                            <a>About Us Page</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/who-we-are">
                            <a>Who We Are</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/all-services">
                            <a>Our Services</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-1">
                            <a>Service Single #1</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-2">
                            <a>Service Single #2</a>
                          </Link>
                        </li>
                      </ul>
                      {/* MEGAMENU LINKS */}
                      <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Medical Pages:</li>
                        <li>
                          <Link href="/all-departments">
                            <a>Our Departments</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/department-single">
                            <a>Department Single</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/all-doctors">
                            <a>Meet the Doctors</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/doctor-1">
                            <a>{`Doctor's Profile #1`}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/doctor-2">
                            <a>{`Doctor's Profile #2`}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/timetable">
                            <a>Doctors Timetable</a>
                          </Link>
                        </li>
                      </ul>
                      {/* MEGAMENU LINKS */}
                      <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Special Pages:</li>
                        <li>
                          <Link href="/pricing-1">
                            <a>Pricing Packages #1</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pricing-2">
                            <a>Pricing Packages #2</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/appointment">
                            <a>Make an Appointment</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/faqs">
                            <a>FAQs Page</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/terms">
                            <a>Terms of Use</a>
                          </Link>
                        </li>
                      </ul>
                      {/* MEGAMENU LINKS */}
                      <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Auxiliary Pages:</li>
                        <li>
                          <Link href="/gallery">
                            <a>Our Gallery</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-listing">
                            <a>Blog Listing Page</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/single-post">
                            <a>Single Blog Post</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contacts-1">
                            <a>Contact Us #1</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contacts-2">
                            <a>Contact Us #2</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* End row */}
                  </div>
                  {/* End container */}
                </div>
                {/* End wsmegamenu */}
              </li>
              {/* END PAGES */}
              {/* LANGUAGES */}
              <li className="nl-languages d-flex">
                {
                  images.map(image => {
                    return (
                      <div key={uuid()} className={"language"}>
                        <Link locale={image.locale} href={`/${image.locale}`} passHref>
                          <a>
                            <Image
                              src={image.src}
                              alt={image.locale}
                              width={"100%"}
                              height={"100%"}
                              style={{ borderRadius: "50%" }}>
                            </Image>
                          </a>
                        </Link>
                      </div>
                    )
                  })
                }
              </li>
              {/* END LANGUAGES */}
            </ul>
          </nav>
          {/* END MAIN MENU */}
        </div>
      </div>
      <MobileMenu />
      {/* END NAVIGATION MENU */}
    </header >
  );
};

export default Header1;
