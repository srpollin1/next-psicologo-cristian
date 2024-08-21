// src/components/Footer.js
import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const numeroCelular = "56949586234";

  return (
    <footer className="page-footer bg-image">
      <div className="container">
        <div className="row mb-8">
          <div className="col-lg-4 py-3">
            <h3>Ps.Cristian Retamales</h3>
            <div className="social-media">
              <a href="https://www.instagram.com/ps.cristian.retamales?igsh=YzFlbm9pNng2MDI1" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://www.tiktok.com/@ps.cristian.retamales" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="social-icon" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 py-3">
            <h5>Menú</h5>
            <ul className="footer-menu">
              <li>
                <a className="nav-item btn-scroll" data-role="smoothscroll" href="#section-one">
                  Quiero ayuda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-item btn-scroll" data-role="smoothscroll" href="#anuncio-1">
                  Precios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-item btn-scroll" data-role="smoothscroll" href="#nuestro-blog">
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
            <a className="footer-link" href="mailto:ps.cristian.retamales@gmail.com">
              ps.cristian.retamales@gmail.com
            </a>
            <a className="footer-link" href="https://maps.app.goo.gl/kQGgqqBxfk8ozx9s8">
              Augusto Leguía Sur 79, Las Condes
            </a>
          </div>
        </div>
        <p className="text-center" id="copyright">
          Copyright © 2024.
          <a href={`https://wa.me/${numeroCelular}`} target="_blank" rel="noopener noreferrer">
            {' '}
            Ps.Cristian Retamales
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
