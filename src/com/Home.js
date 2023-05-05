import Config from "../config";

function Home() {
    return (
        <div className="container" id="home">
            <div className="d-flex align-items-center">
                <div className="mt-5">
                    <p className="magenta fontMono h5 mt-5">Hi, my name is,</p>
                    <h2 className="big-heading-white fontSans fst-italic">{Config.portfolioName},</h2>
                    <h2 className="big-heading-grey fontSans">{Config.tagLine}</h2>
                    <p className="mt-4 mb-4 w-75">{Config.overview}</p>
                    <a className="button fontMono fst-italic p-2" href={Config.resumeLink}>Check Out My Resume!</a>
                </div>
            </div>
        </div>

    )
}

export default Home;