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
        <ul className="mini-heading">
          {items.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      );
      


    return (
        <div id="about" className="about-container col-xl-8 mx-auto">
            <div className="d-flex image-placement">
                <div className="d-flex flex-column">
                    <h2 className="sub-heading">About Me</h2>
                    <hr />
                    <p className="paragraph" dangerouslySetInnerHTML={{ __html: Config.about }}></p>
                    <div className="d-flex flex-row ">
                        {
                            brokenList.map((value, index) => {
                                return (
                                  <div key={index} className="d-flex flex-column ">
                                    {renderList(value)}
                                  </div>
                                );
                              })
                        }
                    </div>
                </div>
                <div className="image-container">
                    <img src={Config.imgPath} alt="Portfolio Profile" />
                </div>
            </div>
        </div>
    )
}

export default About;
