import Link from "next/link";
import React from "react";
import MobileMenu from "../MobileMenu";

const Header1 = ({ toggleMenu, toggle }) => {
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
            <ul className="wsmenu-list">
              {/* DROPDOWN MENU */}
              <li aria-haspopup="true">
                <Link href="/">
                  <a>
                    Գլխավոր
                  </a>
                </Link>
              </li>
              {/* END DROPDOWN MENU */}
              {/* NORUTYUNNER */}
              <li className="nl-news" aria-haspopup="true">
                <Link href="/blog-listing">
                  <a>
                    Նորություններ
                  </a>
                </Link>
              </li>
              {/* NORUTYUNNER VERJ */}
              {/* PAGES */}
              {/* BJISHKNER */}
              <li className="nl-doctors" aria-haspopup="true">
                <Link href="/all-doctors">
                  <a>
                    Բժիշկներ
                  </a>
                </Link>
              </li>
              {/* BJISHKNER */}
              {/* TESADARAN */}
              <li className="nl-gallery" aria-haspopup="true">
                <Link href="/gallery">
                  <a>
                    Տեսադարան
                  </a>
                </Link>
              </li>
              {/* TESADARAN */}
              <li aria-haspopup="true">
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
              {/* HALF MENU */}
              <li aria-haspopup="true">
                <a href="#">
                  Half Menu <span className="wsarrow" />
                </a>
                <div className="wsmegamenu clearfix halfmenu">
                  <div className="container-fluid">
                    <div className="row">
                      {/* Links */}
                      <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                        <li className="title">For Patients:</li>
                        <li>
                          <a href="#">Meet The Doctors</a>
                        </li>
                        <li>
                          <a href="#">Patient Info Sheets</a>
                        </li>
                        <li>
                          <a href="#">Online Patients Portal</a>
                        </li>
                        <li>
                          <a href="#">Patients Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Blog &amp; Latest News</a>
                        </li>
                      </ul>
                      {/* Links */}
                      <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                        <li className="title">Quick Links:</li>
                        <li>
                          <a href="#">Terms &amp; Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Donor Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Workers Compensation</a>
                        </li>
                        <li>
                          <a href="#">Insurance Information</a>
                        </li>
                        <li>
                          <a href="#">After Hours Care</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* END HALF MENU */}
              {/* NAVIGATION MENU BUTTON */}
              <li className="nl-simple header-btn" aria-haspopup="true">
                <Link href="/appointment">
                  <a>Make an Appointment</a>
                </Link>
              </li>
            </ul>
          </nav>
          {/* END MAIN MENU */}
        </div>
      </div>
      <MobileMenu />
      {/* END NAVIGATION MENU */}
    </header>
  );
};

export default Header1;
