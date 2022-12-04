import useTranslation from "next-translate/useTranslation";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import { CONFIG } from "../config";
import { images } from "../enums";
import { BsCaretRightFill, BsCaretDownFill } from "react-icons/bs";
import MobileService from "./MobileService";

const MobileMenu = ({ categories }) => {
  const { t } = useTranslation("common");
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div
      className="mobile-menu"
      style={{
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        marginTop: 0,
        zIndex: 900,
        display: "block",
        left: 0,
        width: "90%",
        marginTop: 70,
        boxShadow: "0px 10px 10px #d3cdcd",
      }}
    >
      <div className="clearfix">
        <div className="desktoplogo">
          <Image
            src="/images/logo.png"
            width={180}
            height={40}
            alt="header-logo"
          />
        </div>
        <nav className="clearfix" id="responsive-nav">
          <ul>
            <li className="mobile-service">
              <p onClick={() => setServicesOpen((prev) => !prev)}>
                {t("header-services.title")}
                {servicesOpen ? (
                  <span>
                    <BsCaretDownFill style={{ color: "grey" }} />
                  </span>
                ) : (
                  <span>
                    <BsCaretRightFill />
                  </span>
                )}
              </p>
              {servicesOpen && (
                <MobileService key={uuid()} items={categories} />
              )}
            </li>
            {CONFIG.headerConfig.map((item) => {
              return (
                <li key={uuid()} className="mobile-service">
                  <Link href={`/${item.link}`}>
                    <a>{t(item.name)}</a>
                  </Link>
                </li>
              );
            })}
            {/* Change  Languages */}
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#00a3c8",
                padding: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "160px",
                }}
              >
                {images.map((image) => {
                  return (
                    <Link
                      locale={image.locale}
                      href={`/${image.locale}`}
                      passHref
                      key={uuid()}
                    >
                      <a>
                        <Image
                          src={image.src}
                          alt={image.locale}
                          width={"40px"}
                          height={"40px"}
                          style={{ borderRadius: "50%" }}
                        ></Image>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </li>
            {/* Change  Languages */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
