import Config from "../config";

function Contact() {
    return (
        <div id="contact" className="contact-container col-8 mx-auto">
            <h4 className="mini-heading">What's Next?</h4>
            <h1 className="dark-big-heading">Get In Touch</h1>
            <p className="paragraph">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <div className="navbar">
                <a className="nav-link btn rounded-3 p-2" href={"mailto:" + Config.email}>
                    Say Hello
                </a>
            </div>
            <div className="d-flex flex-row align-items-center mt-5">
                {
                    Config.socials.map((value, index) => {
                        return (
                            <a href={value.href} key={index} target={value.target} rel="noreferrer">
                                <i className={"bi bi-" + value.icon}>
                                </i>
                            </a>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Contact;