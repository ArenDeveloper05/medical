import Link from "next/link";
import { CONFIG } from '../config'
import uuid from 'react-uuid';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const AdminPanel = () => {

    const [selectedPanel, setSelectedPanel] = useState(0);
    let accessToken;
    if (process.browser) {
        accessToken = window.localStorage.getItem("token");
    }

    function Redirect({ to }) {
        const router = useRouter();
        useEffect(() => {
            router.push(to)
        }, [to, router])
        return null
    }

    if (!accessToken) {
        return <Redirect to={"/login"} />
    } else {
        return (
            <div className='admin-panel'>
                <aside className='admin-panel-sidebar'>
                    {CONFIG.adminPanelConfig.map((item, idx) => (
                        <div key={uuid()}
                            className="admin-panel-sidebar-department"
                            onClick={() => setSelectedPanel(idx)}
                            style={{ cursor: "pointer" }}
                        >
                            <p key={uuid()}>
                                {item.name}
                            </p>
                        </div>))}

                </aside>
                <main className='admin-panel-content'>
                    {CONFIG.adminPanelConfig[selectedPanel].component}
                </main>
            </div>
        )
    }
}

