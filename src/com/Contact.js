import Config from "../config";

function Contact() {
    return (<div id="contact" className="container">
        <div className="d-flex align-items-center justify-content-center flex-column text-center">
            
                <p className="magenta fontMono h5">What's Next?</p>
                <h2 className="big-heading-white fontSans">Get In Touch</h2>
                <p className="mb-4 w-50">My mailbox is always open, even though I'm not seeking for any new opportunities right now. I will do my best to get back to you whether you have a question or are just looking to say hello!</p>
                <a className="button fontMono fst-italic p-2" href={'mailto:' + Config.email}>Say Hello!</a>
            </div>
        </div>

    )
}

export default Contact;