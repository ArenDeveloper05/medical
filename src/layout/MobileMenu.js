import useTranslation from "next-translate/useTranslation";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useState } from "react";
import uuid from "react-uuid";
import { CONFIG } from "../config"
import { images } from '../enums'

const MobileMenu = () => {
  // const [activeMenu, setActiveMenu] = useState("");
  const { t } = useTranslation("common");

  return (
    <div
      className="wsmainfull menu clearfix cloned d-block d-lg-none"
      style={{
        position: "fixed",
        top: 0,
        marginTop: 0,
        zIndex: 500,
        display: "block",
        left: 0,
        width: 731,
      }}
    >
      <div className="wsmainwp clearfix">
        {/* LOGO IMAGE */}
        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
        <div className="desktoplogo">
          <a href="#hero-2">
            <Image
              src="/images/logo.png"
              width={180}
              height={40}
              alt="header-logo"
            />
          </a>
        </div>
        {/* MAIN MENU */}
        <nav className="wsmenu clearfix">
          <ul className="wsmenu-list">
            {CONFIG.headerConfig.map((item) => {
              return (
                <li key={uuid()}>
                  <Link href={`/${item.link}`}>
                    <a>{t(item.name)}</a>
                  </Link>
                </li>
              )
            })
            }
            <li style={{ display: "flex", justifyContent: "center", backgroundColor: "teal" }}>
              {
                images.map(image => {
                  return (
                    <Link locale={image.locale} href={`/${image.locale}`} passHref key={uuid()}>
                      <a>
                        <Image
                          src={image.src}
                          alt={image.locale}
                          width={"30px"}
                          height={"30px"}
                          style={{ borderRadius: "50%" }}>
                        </Image>
                      </a>
                    </Link>
                  )

                })
              }
            </li>
          </ul>
        </nav>
        {/* END MAIN MENU */}
      </div>
    </div >
  );
};

export default MobileMenu;
