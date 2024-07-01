// src/components/SectionTwo.js
import React from 'react';

const SectionTwo = () => {
  const numeroCelular = "56949586234";

  return (
    <div className="page-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3 wow fadeInUp">
            <h1 className="title-section">
            Porque ir al psicoterapia no te hace "loco"
            </h1>
            <div className="divider" />
            <p>
              Contáctame ahora y podré ayudarte.
            </p>
            <a className="btn btn-primary ml-lg-2" href={`https://wa.me/${numeroCelular}`}>
                Contáctame
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
