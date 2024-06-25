// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer
      className="page-footer bg-image"
      style={{
        backgroundImage: 'url(../assets/img/world_pattern.svg)',
      }}
    >
      <div className="container">
        <div className="row mb-8">
          <div className="col-lg-4 py-3">
            <h3>Ps.Cristian Retamales</h3>
            <div className="social-media-button">
              <a href="#">
                <span className="mai-logo-facebook-f" />
              </a>
              <a href="#">
                <span className="mai-logo-twitter" />
              </a>
              <a href="#">
                <span className="mai-logo-google-plus-g" />
              </a>
              <a href="#">
                <span className="mai-logo-instagram" />
              </a>
              <a href="#">
                <span className="mai-logo-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 py-3">
            <h5>Menu</h5>
            <ul className="footer-menu">
              <li>
                <a href="#anuncio-1"> ¿Cómo funciona? </a>
              </li>
              <li className="nav-item">
                <a href="#anuncio-1">Precios</a>
              </li>
              <li className="nav-item">
                <a href="#nuestro-blog"> Blog</a>
              </li>
              <li className="nav-item">
                <a href="https://wa.me/56981296528">Contactame</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 py-3">
            <h5>Contactanos</h5>
            <a className="footer-link" href="#">
              +569 8129 6528
            </a>
            <a className="footer-link" href="#">
              pscristianretamales@gmail.com
            </a>
          </div>
        </div>
        <p className="text-center" id="copyright">
          Copyright © 2024.
          <a href="https://wa.me/56981296528" target="_blank">
            {' '}
            Ps.Cristian Retamales
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
