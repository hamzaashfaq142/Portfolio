import Config from "../config";
import { Nav, Tab } from "react-bootstrap";
import { useState } from "react";

function Experience() {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div id="experience" className="experience-container col-xl-8 mx-auto">
            <div>
                <h2 className="sub-heading">Where I have Worked</h2>
                <hr />
                <div>
                    <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                        <div className="d-flex">
                            <Nav variant="pills" className="flex-column">
                                {
                                    Config.jobs.map((value, index) => {
                                        return (
                                            <Nav.Item key={index + 1} className="tab-head">
                                                <Nav.Link eventKey={index}>{value.companyShortName}</Nav.Link>
                                            </Nav.Item>
                                        )
                                    })
                                }
                            </Nav>
                            <Tab.Content className="flex-grow-1">
                                {
                                    Config.jobs.map((value, mainIndex) => {
                                        return (
                                            <Tab.Pane eventKey={mainIndex} className="tab-desc" key={mainIndex}>
                                                <div className="d-flex flex-column">
                                                    <div className="d-flex flex-row">
                                                        <p className="designation">{value.designation}</p>
                                                        <a href={value.link ? value.link : "#"} className="company-name" target="_blank" rel="noreferrer">
                                                            <p className="ms-1">@ {value.companyLongName}</p>
                                                        </a>
                                                    </div>
                                                    <p className="period">{value.period}</p>
                                                    <div className="responsibilities">
                                                        {
                                                            value.responsibilities.map((value, index) => {
                                                                return (
                                                                    <ul key={`${mainIndex}-${index}`}>
                                                                        <li key={`${mainIndex}-${index}`}>{value.data}</li>
                                                                    </ul>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        )
                                    })
                                }
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

export default Experience;