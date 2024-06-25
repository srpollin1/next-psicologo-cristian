// src/components/SectionTwo.js
import React from 'react';

const SectionTwo = () => {
  return (
    <div className="page-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3 wow fadeInUp">
            <h1 className="title-section">
              Somos la generación que va a terapia
            </h1>
            <div className="divider" />
            <p>
              Contactame ahora y podré ayudarte.
            </p>
            <a
              className="btn btn-primary mt-3"
              href="https://wa.me/56981296528"
            >
              Contactame
            </a>
          </div>
          <div className="col-lg-6 py-3 wow fadeInRight">
            <div className="img-fluid py-3 text-center">
              <img
                alt=""
                src="/assets/img/silla.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
