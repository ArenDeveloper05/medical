import { memo, useEffect, useState } from "react";
import { stickyNav } from "../utils";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   dataImage();
  //   aTagClick();
  //   window.addEventListener("scroll", stickyNav);
  // });
  // useEffect(() => {
  //   document.querySelector("body").classList.remove("wsactive");
  // }, []);
  // const openClick = () => {
  //   setToggle(!toggle);
  //   document.querySelector("body").classList.toggle("wsactive");
  // };

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  });

  return (
    <div id="page" className="page-wrapper demo">
      <Header toggleMenu={setToggle} toggle={toggle} />
      {children}
      <Footer />
    </div>
  );
};

export default memo(Layout);
