import { Outlet } from "react-router-dom";
import Config from "../config";

const Navbar = (props) => {

  return (
    <div id='WebNavBar'>
      <ul className="nav justify-content-center">
        {
          Config.nav.map((item, index) => {
            return(
            <li className="nav-item">
              <a className={item.cName} href={item.href}>{item.name}</a>
            </li>
            )
          })
        }
      </ul>
      <Outlet />
    </div>
  );

};

export default Navbar;