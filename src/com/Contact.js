import Config from "../config";

function Contact() {
    return (<div id="contact" className="container">
        <div className="d-flex align-items-center justify-content-center flex-column text-center">
            
                <p className="magenta fontMono h5">What's Next?</p>
                <h2 className="big-heading-white fontSans">Get In Touch</h2>
                <p className="mb-4 w-50">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <a className="button fontMono fst-italic p-2" href={'mailto:' + Config.email}>Say Hello!</a>
            </div>
        </div>

    )
}

export default Contact;