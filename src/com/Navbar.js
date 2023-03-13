import Config from "../config";

const Navbar = () => {

  return (

    <div >
      <nav id="navbar" className="navbar flex-row align-text-center p-3 fixed-top">
        <p className='h3 fw-bold fst-italic fontSans magenta'>{Config.navHeader}</p>
        <nav className="nav nav-pills flex-row" id="navs">
          {
            Config.nav.map((item, index) => {
              return (
                <a key={index} className={item.cName} href={item.href}>
                  {item.name}
                </a>
              )
            })
          }
        </nav>
      </nav>
    </div>
  );

};

export default Navbar;