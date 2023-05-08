import Config from "../config";

function Navbar() {
  return (
    <nav id="navbar" className="navbar-container navbar navbar-dark navbar-expand-xl fixed-top px-5">
      <div className="navbar-brand">{Config.navHeader}</div>
      <button
        id="toggler"
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          {
            Config.navLinks.map((value, index) => {
              return (
                <li className="nav-item" key={index} >
                  <a className={"nav-link " + value.class} href={value.href} target={value.target} rel="noreferrer" >
                    {value.name}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
