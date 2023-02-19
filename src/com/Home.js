import Config from "../config";
import { Outlet, Link } from "react-router-dom";

function Home() {
    return (
        <div id="Navbar">
            {
                Config.nav.map((item, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <Link className={item.cName} to={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })
            }
            <Outlet />
        </div>

    )
}

export default Home;