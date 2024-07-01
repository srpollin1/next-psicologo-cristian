// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const numeroCelular = "56949586234";

  return (
    <footer
      className="page-footer bg-image"
    >
      <div className="container">
        <div className="row mb-8">
          <div className="col-lg-4 py-3">
            <h3>Ps.Cristian Retamales</h3>
            <div className="social-media-button">
              <a href="https://www.instagram.com/ps.cristian.retamales?igsh=YzFlbm9pNng2MDI1">
                <span className="mai-logo-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 py-3">
            <h5>Menú</h5>
            <ul className="footer-menu">
              <li>
              <a className="nav-item" href="/">
              Quiero ayuda
              </a>
              </li>
              <li className="nav-item">
              <a className="nav-item" href="/">
                Precios
              </a>
              </li>
              <li className="nav-item">
              <a className="nav-item" href="/blog">
                Blog
              </a>
              </li>
              <li className="nav-item">
                <a href={`https://wa.me/${numeroCelular}`}>
                  Contáctame
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 py-3">
            <h5>Contáctame</h5>
            <a className="footer-link" href={`https://wa.me/${numeroCelular}`}>
              {`+${numeroCelular}`}
            </a>
            <br />
            <a className="footer-link" href="#">
            ps.cristian.retamales@gmail.com
            </a>
            <a className="footer-link" href="https://maps.app.goo.gl/kQGgqqBxfk8ozx9s8">
            Augusto Leguía Sur 79, Las Condes
            </a>
          </div>
        </div>
        <p className="text-center" id="copyright">
          Copyright © 2024.
          <a href={`https://wa.me/${numeroCelular}`} target="_blank">
            {' '}
            Ps.Cristian Retamales
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
