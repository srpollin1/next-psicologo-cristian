// src/components/BannerOne.js
import React, { useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import 'animate.css';


const BannerOne = () => {
  const numeroCelular = "56949586234";

  useEffect(() => {
    const words = document.getElementsByClassName("toggle");
    let wordCounter = 0;

    const updateWord = () => {
      if (wordCounter >= words.length) wordCounter = 0;
      for (let i = 0; i < words.length; i++) {
        words[i].classList.remove('active', 'animate__animated', 'animate__fadeInUp');
      }
      words[wordCounter].classList.add('active', 'animate__animated', 'animate__fadeInUp');
      wordCounter++;
    };

    const intervalId = setInterval(updateWord, 3000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container">
      <div className="page-banner home-banner">
        <div
          className="row align-items-center flex-wrap h-100"
          style={{
            backgroundColor: 'white'
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
            Contáctame
            {/* <FaWhatsapp /> */}
              {/* <div className="fab">
                <span className="mai-play" />
              </div> */}
            </a>
          </div>
          <div className="col-md-6 py-5 wow zoomIn">
            <div className="img-fluid text-center">
              <img
                alt=""
                src="/assets/img/all-image/BannerOne.png"
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
