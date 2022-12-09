import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import uuid from "react-uuid";
import MobileMenu from "./MobileMenu";
import { images } from "../enums";
import { CONFIG } from "../config";
import { socialLinks } from "../enums";
import { useRouter } from "next/router";
import { changeIdName, generateLanguage, hierarchy } from "../utils";
import { useEffect } from "react";
import { getCategories, getServices } from "../DataServices";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = ({ toggleMenu, toggle }) => {
  const { t, lang } = useTranslation("common");
  const { asPath } = useRouter();

  //For future test
  // const router = useRouter();
  // console.log(router);
  //For future test

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const {
          data: { data },
        } = await getCategories(generateLanguage(lang));
        const res = await getServices(generateLanguage(lang));
        setCategories([...data, ...changeIdName(res.data.data[0])]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, [lang]);

  return (
    <header id="header" className="header">
      {/* MOBILE HEADER */}
      <div className="wsmobileheader clearfix d-flex align-items-baseline justify-content-around">
        <div id="wsnavtoggle" onClick={() => toggleMenu((prev) => !prev)}>
          {!toggle ? (
            <HiMenuAlt2
              className="text-secondary"
              style={{
                transform: "scale(2.5)",
                marginBottom: "42px",
                cursor: "pointer",
              }}
            />
          ) : (
            <AiOutlineClose
              className="text-secondary"
              style={{
                transform: "scale(3,2.4)",
                marginBottom: "42px",
                cursor: "pointer",
              }}
            />
          )}
        </div>
        <span className="smllogo">
          <Image
            src="/images/logo.png"
            width={180}
            height={40}
            alt="mobile-logo"
          />
        </span>
      </div>
      {/* HEADER STRIP */}
      <div className="headtoppart bg-blue clearfix">
        <div className="headerwp clearfix">
          {/* Address */}
          <div className="headertopleft">
            <div className="address clearfix">
              <span>
                <i className="fas fa-map-marker-alt" />
                {t("footer-location.address.street")}
              </span>
              <Link href="contact-us">
                <a className="callusbtn">
                  <i className="fas fa-phone" />
                  {t("footer-location.phone")}
                </a>
              </Link>
            </div>
          </div>
          {/* Social Links */}
          <div className="headertopright">
            {socialLinks.map(({ icon, title, className, href }) => {
              return (
                <a
                  className={className}
                  target="blank"
                  title="Facebook"
                  href={href}
                  key={uuid()}
                >
                  <i className={icon} />
                  <span className="mobiletext02">{title}</span>
                </a>
              );
            })}
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
            <Link href={"/"}>
              <a>
                <Image
                  src="/images/logo.png"
                  width={180}
                  height={40}
                  alt="header-logo"
                />
              </a>
            </Link>
          </div>
          {/* MAIN MENU */}
          <nav className="wsmenu clearfix">
            <ul className="wsmenu-list d-flex justify-content-center align-items-center">
              {/* HOME*/}
              <li>
                <Link href="/">
                  <a>{t("header-home")}</a>
                </Link>
              </li>
              {/* Services */}
              <li>
                <a>{t("header-services.title")}</a>
                <HeaderMenu items={hierarchy(categories)} />
              </li>
              {CONFIG.headerConfig.map(({ link, name }) => {
                return (
                  <li key={uuid()}>
                    <Link href={`/${link}`}>{t(name)}</Link>
                  </li>
                );
              })}
              {/* <li>
                <Link href="/about-us">
                  <a>{t("header-aboutus")}</a>
                </Link>
              </li>
              <li>
                <Link href="blog-listing">
                  <a>{t("header-news")}</a>
                </Link>
              </li>
              <li>
                <Link href="all-doctors">
                  <a>{t("header-doctors")}</a>
                </Link>
              </li>
              <li>
                <Link href="gallery">
                  <a>{t("header-gallery")}</a>
                </Link>
              </li>
              <li>
                <Link href="contact-us">
                  <a>{t("header-contactus")}</a>
                </Link>
              </li> */}

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
                {images.map((image) => {
                  return (
                    <div key={uuid()} className={"language"}>
                      <Link
                        locale={image.locale}
                        href={`/${image.locale}${asPath}`}
                        passHref
                      >
                        <a
                          onClick={() =>
                            setTimeout(() => {
                              location.reload();
                            }, 300)
                          }
                        >
                          <Image
                            src={image.src}
                            alt={image.locale}
                            width={"100%"}
                            height={"100%"}
                            style={{ borderRadius: "50%" }}
                          ></Image>
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </li>
              {/* END LANGUAGES */}
            </ul>
          </nav>
          {/* END MAIN MENU */}
        </div>
      </div>
      {toggle && (
        <MobileMenu
          toggleMenu={toggleMenu}
          categories={hierarchy(categories)}
        />
      )}

      {/* END NAVIGATION MENU */}
    </header>
  );
};

export default Header;
