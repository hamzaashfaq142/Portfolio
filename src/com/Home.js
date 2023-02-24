import Config from "../config";

function Home() {
    return (
        <div id="home">
            <p className="magenta fontMono h5">Hi, my name is,</p>
            <h2 className="big-heading fontSans">{Config.portfolioName},</h2>
            <h3 className="big-heading fontSans">{Config.tagLine}</h3>
        </div>
    )
}

export default Home;