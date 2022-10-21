import useTranslation from "next-translate/useTranslation";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useState } from "react";
import uuid from "react-uuid";
import { CONFIG } from "../config"
import { images } from '../enums'
import NestedList from "../NestedList";


const MobileMenu = () => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);

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

          <Image
            src="/images/logo.png"
            width={180}
            height={40}
            alt="header-logo"
          />

        </div>
        {/* MAIN MENU */}
        <nav className="wsmenu clearfix" id="responsive-nav">
          <ul className="wsmenu-list">
            {CONFIG.headerConfig.map((item) => {
              if (item.nesteds) {
                return (
                  <li key={uuid()}>
                    <a style={{ cursor: "pointer", color: "#666666" }} onClick={() => setOpen((prev) => !prev)}>
                      {t(item.name)}
                    </a>
                    <ul className="wsmenu-list " style={{ boxShadow: "0px 10px 10px #d3cdcd" }} >
                      {open &&
                        item.nesteds.map((nested1) => {
                          if (nested1.nesteds) {
                            return (
                              <NestedList key={uuid()} data={nested1} />
                            )
                          }
                          return (
                            <li key={uuid()} style={{ position: "relative", borderBottom: " 1px solid #ccc9c9" }}>
                              <Link href={`/${nested1.link}`}>
                                <a>
                                  <p className="nested fs-16">{t(nested1.title)}</p>
                                </a>
                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </li>
                )
              }
              return (
                <li key={uuid()}>
                  <Link href={`/${item.link}`}>
                    <a>{t(item.name)}</a>
                  </Link>
                </li>
              )
            })}
            <li style={{ display: "flex", justifyContent: "center", backgroundColor: "#00a3c8" }}>
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
