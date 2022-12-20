import { CONFIG } from "../config";
import uuid from "react-uuid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "../enums";

const AdminPanel = () => {
  const [selectedPanel, setSelectedPanel] = useState(0);

  let accessToken;
  let firstRender;

  if (process.browser) {
    accessToken = window.localStorage.getItem("token");
    firstRender = window.localStorage.getItem("render");
  }

  useEffect(() => {
    if (firstRender == "true") {
      window.localStorage.setItem("render", "false");
      location.reload();
    }
    () => {
      localStorage.removeItem("render");
    };
  }, []);

  const router = useRouter();
  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="admin-panel">
      <aside className="admin-panel-sidebar">
        <div className="d-flex justify-content-end admin-panel-sidebar-langs">
          {images.map((image) => {
            return (
              <div key={uuid()} className={"language"}>
                <Link
                  locale={image.locale}
                  href={`/${image.locale}/admin-panel`}
                  passHref
                >
                  <a>
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
        </div>
        {CONFIG.adminPanelConfig.map((item, idx) => (
          <div
            key={uuid()}
            className="admin-panel-sidebar-department"
            onClick={() => setSelectedPanel(idx)}
            style={
              selectedPanel == idx
                ? { backgroundColor: "#0083a0", cursor: "pointer" }
                : { cursor: "pointer" }
            }
          >
            <p
              href={item.link}
              key={uuid()}
              className={selectedPanel == idx ? "text-light" : ""}
            >
              {item.name}
            </p>
          </div>
        ))}
      </aside>
      <main className="admin-panel-content">
        {CONFIG.adminPanelConfig[selectedPanel].component}
      </main>
    </div>
  );
};

export default AdminPanel;
