import Config from "../config";

function Footer() {
    return (
        <div id="footer" className="d-flex justify-content-center p-5">
            <div className="d-flex flex-column">
                <p className="fontMono h5">Designed by Muhammad Daniyal</p>
                <div className="d-flex flex-row justify-content-center">
                    {
                        Config.socials.map((item, index) => {
                            return (
                                <a key={index} href={item.href}>
                                    <i className={'h3 m-2 bi bi-' + item.icon} />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Footer;