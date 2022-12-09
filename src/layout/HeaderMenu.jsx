import Link from "next/link";
import uuid from "react-uuid";

const HeaderMenu = ({ items }) => {
  return (
    <ul className="services-nesteds sub-menu ">
      {items.map((item) =>
        item.children.length !== 0 ? (
          <li key={uuid()} style={{ border: "none" }}>
            <p style={{ border: "none" }}>{item.name}</p>
            <HeaderMenu items={item.children} />
          </li>
        ) : (
          <li key={uuid()}>
            {item.isFinal === 0 ? (
              <p>{item.name}</p>
            ) : (
              <Link href={`/services/${item.name}?id=${item.ID}`}>
                <a>{item.name}</a>
              </Link>
            )}
          </li>
        )
      )}
    </ul>
  );
};

export default HeaderMenu;
