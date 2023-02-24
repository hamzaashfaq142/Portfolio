import Config from "../config";

const Navbar = () => {

  return (

    <div >
      <nav id="navbar" className="navbar flex-row align-items-center p-3">
        <a className='navbar-brand' href={Config.staticLinks.home.href}>
          <p className='h3 fw-bold fst-italic fontSans magenta'>{Config.navHeader}</p>
        </a>
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

      {/* <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabindex="0">
        <h4 id="item-1">Item 1</h4>
        <p>...</p>
        <h5 id="item-1-1">Item 1-1</h5>
        <p>...</p>
        <h5 id="item-1-2">Item 1-2</h5>
        <p>...</p>
        <h4 id="item-2">Item 2</h4>
        <p>...</p>
        <h4 id="item-3">Item 3</h4>
        <p>...</p>
        <h5 id="item-3-1">Item 3-1</h5>
        <p>...</p>
        <h5 id="item-3-2">Item 3-2</h5>
        <p>...</p>
      </div> */}
    </div>
  );

};

export default Navbar;