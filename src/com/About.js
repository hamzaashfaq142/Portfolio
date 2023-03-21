import Config from "../config";

function About() {
    return (
        <div id="about" className="container vh-100">
            <span className="d-flex flex-row">
                <h1 className="fontMono magenta">01.</h1>
                <h2 className="med-heading-white fontSans">About Me</h2>
            </span>
            
            <div className="d-flex">
                <div className="pe-5">
                    <p>{Config.about}</p>
                    <ul className="magenta fontMono">
                        {
                            Config.techExperience.map((value,index)=>{
                                return(
                                    <li key={index}>
                                        {value}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <img src={Config.imgPath} class="img-fluid rounded w-25 h-25" alt="Portrait"></img>
            </div>
        </div>
    );
}

export default About;