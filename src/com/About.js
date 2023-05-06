import { useMemo, useRef } from "react";
import Config from "../config";

function About() {

    const lastLength = useRef(0);

    const brokenList = useMemo(() => {
        let result = [];
        for (let i = 1; i <= Config.noOfTechColumns; i++) {
            let list = Config.techExperience.slice(lastLength.current, Math.ceil(Config.techExperience.length / Config.noOfTechColumns) + lastLength.current);
            result.push(list);
            lastLength.current = lastLength.current + list.length;
        }
        return result;
    }, [])

    const renderList = (items) => (
        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );

    return (
        <div id="about" className="about-container">
            <div className="d-flex flex-row">
                <div className="d-flex flex-column">
                    <h2 className="sub-heading">About Me</h2>
                    <hr />
                    <p className="paragraph" dangerouslySetInnerHTML={{ __html: Config.about }}></p>
                    <div className="d-flex flex-row m-2 mini-heading">
                        {
                            brokenList.map((value) => {
                                console.log(value)
                                return (renderList(value))
                            })
                        }
                    </div>
                </div>
                <img src="/img/portrait.jpg" alt="Portfolio" />
            </div>
        </div>
    )
}

export default About;
