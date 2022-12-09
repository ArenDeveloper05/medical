import Link from "next/link";
import { useState } from "react";
import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";
import uuid from "react-uuid";

const MobileService = ({ items, toggleMenu }) => {
  const [displayChildren, setDisplayChildren] = useState({});

  return (
    <ul className="mobile-menu-list">
      {items.map((item) => {
        return (
          <li key={uuid()} className="mobile-service">
            <p
              onClick={() => {
                setDisplayChildren({
                  ...displayChildren,
                  [item.name]: !displayChildren[item.name],
                });
              }}
            >
              {item.children.length !== 0 ? (
                item.name
              ) : (
                <Link
                  href={`/services/${item.name}?id=${
                    item.id ? item.id : item.ID
                  }`}
                >
                  <a
                    onClick={() => {
                      toggleMenu((prev) => !prev);
                    }}
                  >
                    {item.name}
                  </a>
                </Link>
              )}
              {item.children.length !== 0 && (
                <span>
                  {displayChildren[item.name] ? (
                    <BsCaretDownFill
                      className="icon-hover"
                      style={{
                        color: "grey",
                        fontSize: "22px",
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <BsCaretRightFill
                      className="icon-hover"
                      style={{ fontSize: "22px", cursor: "pointer" }}
                    />
                  )}
                </span>
              )}
            </p>
            {displayChildren[item.name] && item.children && (
              <MobileService toggleMenu={toggleMenu} items={item.children} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MobileService;
