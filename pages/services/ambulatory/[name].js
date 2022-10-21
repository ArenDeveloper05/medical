import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react'
import { Nav, Tab } from 'react-bootstrap';
import uuid from 'react-uuid';
import { CONFIG } from '../../../src/config'
import Layouts from '../../../src/layout/Layouts';

const AmbulatoryDynamic = () => {
    const { asPath } = useRouter();
    const pageUrl = asPath.substring(1);
    const { t } = useTranslation("common");
    const [selected, setSelected] = useState(0);

    return (
        <Layouts>
            <section id="tabs-2" className="wide-100 tabs-section division">
                <div className="container">
                    <Tab.Container defaultActiveKey="tab-11">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="list-group text-center clearfix">
                                    <Nav className="nav nav-pills" id="pills-tab" as="ul">
                                        {
                                            CONFIG.servicesConfig[pageUrl].nesteds.map((item, idx) => {
                                                return (
                                                    <Nav.Item className={"nav-item "} id={selected === idx ? "selected" : ""} key={uuid()} onClick={() => {
                                                        if (CONFIG.servicesConfig[pageUrl].nesteds.length !== 1 && selected !== idx) {
                                                            setSelected(idx)
                                                        }
                                                    }}>
                                                        <Nav.Link >
                                                            {t(item.title)}
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                )
                                            })
                                        }
                                    </Nav>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <Tab.Content className="tab-content" id="pills-tabContent">
                                    <Tab.Pane
                                        className="tab-pane fade show"
                                        eventKey="tab-11"
                                        role="tabpanel"
                                        aria-labelledby="tab11-list"
                                    >
                                        {
                                            CONFIG.servicesConfig[pageUrl].nesteds[0].component
                                        }
                                    </Tab.Pane>

                                </Tab.Content>
                            </div>

                        </div>
                    </Tab.Container>
                </div>
            </section>
        </Layouts>
    )
}

export default AmbulatoryDynamic