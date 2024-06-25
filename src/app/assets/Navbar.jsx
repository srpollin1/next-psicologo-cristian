import React from 'react';

const Navbar = () => {
  const numeroCelular = "56949586234";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
      <div className="container">
        <a className="text-primary" href="/">
        <img src="/assets/img/logo.png" alt="Logo" style={{ height: '75px', marginRight: '-10px' }} />
          Ps.
          <span className="text-primary"> Cristian Retamales</span>
        </a>
        <button
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarContent"
          data-toggle="collapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link btn-scroll" data-role="smoothscroll" href="#section-one">
                ¿Cómo funciona?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-scroll" data-role="smoothscroll" href="#anuncio-1">
                Precios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-scroll" data-role="smoothscroll" href="#nuestro-blog">
                Blog
              </a>
            </li>
            {/* <a className="btn btn-primary ml-lg-2" href="https://wa.me/"></a> */}
            <li className="nav-item">
              <a className="btn btn-primary ml-lg-2" href={`https://wa.me/${numeroCelular}`}>
                Contactame
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
