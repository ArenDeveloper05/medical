import { CONFIG } from "../config";
import uuid from "react-uuid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [selectedPanel, setSelectedPanel] = useState(0);

  let accessToken;

  if (process.browser) {
    accessToken = window.localStorage.getItem("token");
  }

  const router = useRouter();
  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="admin-panel">
      <aside className="admin-panel-sidebar">
        {CONFIG.adminPanelConfig.map((item, idx) => (
          <div
            key={uuid()}
            className="admin-panel-sidebar-department"
            onClick={() => setSelectedPanel(idx)}
          >
            <p href={item.link} key={uuid()} style={{ cursor: "pointer" }}>
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
