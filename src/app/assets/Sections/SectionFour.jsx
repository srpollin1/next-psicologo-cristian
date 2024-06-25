import React from 'react';

const SectionFour = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="subhead" id="nuestro-blog">
            Nuestro Blog
          </div>
          <h2 className="title-section">
            Lee lo último
          </h2>
          <div className="divider mx-auto" />
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 py-3 wow fadeInUp">
            <div className="card-blog">
              <div className="header">
                <div className="post-thumb">
                  <img
                    alt=""
                    src="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg"
                  />
                </div>
              </div>
              <div className="body">
                <h5 className="post-title">
                  <a href="/blog/salud-mental">
                    Salud Mental
                  </a>
                </h5>
                <div className="post-date">
                  Publicado el{' '}
                  <a href="/blog/salud-mental">
                    25 de Junio 2024
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-3 wow fadeInUp">
            <div className="card-blog">
              <div className="header">
                <div className="post-thumb">
                  <img
                    alt=""
                    src="https://cdn.pixabay.com/photo/2020/04/07/04/17/desperate-5011953_1280.jpg"
                  />
                </div>
              </div>
              <div className="body">
                <h5 className="post-title">
                  <a href="/blog/depresion">
                    Depresión
                  </a>
                </h5>
                <div className="post-date">
                  Publicado el{' '}
                  <a href="/blog/depresion">
                    25 de Junio 2024
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-3 wow fadeInUp">
            <div className="card-blog">
              <div className="header">
                <div className="post-thumb">
                  <img
                    alt=""
                    src="https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_1280.jpg"
                  />
                </div>
              </div>
              <div className="body">
                <h5 className="post-title">
                  <a href="#">
                    Relaciones Personales
                  </a>
                </h5>
                <div className="post-date">
                  Posted on{' '}
                  <a href="#">
                    27 Jan 2020
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 text-center wow fadeInUp">
            <a
              className="btn btn-primary"
              href="/blog"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
