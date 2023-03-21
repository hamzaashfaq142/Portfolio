import Config from "../config";

function About() {
    return (
        <div id="about" className="d-flex align-items-center">
            <div className="container">
                <p className="magenta fontMono h5">About Me</p>
                <p>{Config.about}</p>
            </div>
        </div>
    );
}

export default About;