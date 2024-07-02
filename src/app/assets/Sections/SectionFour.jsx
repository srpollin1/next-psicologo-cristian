import React from 'react';

const SectionFour = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="subhead" id="nuestro-blog">
            Mi Blog
          </div>
          <h2 className="title-section">
            Lee lo último
          </h2>
          <div className="divider mx-auto" />
        </div>
        <div className="row mt-5" id='blogs'>
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
                  La Importancia de la Salud Mental
                  </a>
                </h5>
                <div className="post-date">
                  Publicado el{' '}
                  <a href="/blog/salud-mental">
                  01 de Julio, 2024
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
                    src="https://cdn.pixabay.com/photo/2017/11/02/20/24/depression-2912404_1280.jpg"
                  />
                </div>
              </div>
              <div className="body">
                <h5 className="post-title">
                  <a href="/blog/depresion">
                  Entendiendo la Depresión
                  </a>
                </h5>
                <div className="post-date">
                  Publicado el{' '}
                  <a href="/blog/depresion">
                  01 de Julio, 2024
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
                  <a href="/blog/relaciones-interpersonales">
                  La Importancia de las Relaciones Interpersonales
                  </a>
                </h5>
                <div className="post-date">
                Publicado el{' '}
                  <a href="/blog/relaciones-interpersonales">
                  01 de Julio, 2024
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
