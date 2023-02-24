import { Outlet } from "react-router-dom";
import Config from "../config";

const Navbar = (props) => {

  return (

    <div id='WebNavBar' className="p-3 d-flex flex-column align-items-center">
      <a className='navbar-brand' href={Config.staticLinks.home.href}>
        <span className='h3 text-white fw-bold fst-italic'>{Config.portfolioName}</span>
      </a>
      <ul className="nav justify-content-center mt-4">
        {
          Config.nav.map((item, index) => {
            return (
              <li key={index} className="nav-item ms-2 me-2">
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