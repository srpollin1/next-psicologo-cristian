// src/components/Navbar.js
import React from 'react';

const BannerOne = () => {
  const numeroCelular = "56949586234";

  return (
    <div className="container">
      <div className="page-banner home-banner">
        <div
          className="row align-items-center flex-wrap h-100"
          style={{
            backgroundColor: '#fefaf5'
          }}
        >
          <div className="col-md-6 py-5">
            <h1
              className="quiero"
              style={{
                color: '#6B9080',
                fontSize: '3.875rem',
                fontWeight: '700'
              }}
            >
              Quiero{' '}
              <br />
              <span
                className="toggle active"
                style={{
                  color: '#A4C3B2'
                }}
              >
                {' '}sentirme bien
              </span>
              <span
                className="toggle"
                style={{
                  color: '#A4C3B2'
                }}
              >
                {' '}ayuda
              </span>
              <span
                className="toggle"
                style={{
                  color: '#A4C3B2'
                }}
              >
                {' '}que alguien me escuche
              </span>
            </h1>

            <a className="btn btn-primary btn-split" href={`https://wa.me/${numeroCelular}`}>
              Contactame
              <div className="fab">
                <span className="mai-play" />
              </div>
            </a>
          </div>
          <div className="col-md-6 py-5 wow zoomIn">
            <div className="img-fluid text-center">
              <img
                alt=""
                src="https://doodleipsum.com/700/outline?i=efb2399e32de73e7933220b64879154a"
                style={{
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>
        <a
          className="btn-scroll"
          data-role="smoothscroll"
          href="#about"
        >
          <span className="mai-arrow-down" />
        </a>
      </div>
    </div>
  );
};

export default BannerOne;
