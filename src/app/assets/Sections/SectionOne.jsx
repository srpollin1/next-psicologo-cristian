import React from 'react';

const SectionOne = () => {
  return (
    <div className="page-section" id='section-one'>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 id='como-ayudar'
             
            >
              <span
                style={{
                  color: '#6B9080'
                }}
              >
                ¿Cómo
              </span>
              {' '}
              <br />
              {' '}te puedo{' '}
              <br />
              {' '}ayudar?
            </h1>
            <br />
            <br />
            <p id='texto-como-ayudar'>
              Todos atravesamos momentos difíciles, desde{' '}
              
              inseguridades personales hasta problemas en nuestras{' '}
              
              relaciones. Te invitamos a que empieces a transformar tu{' '}
              
              vida en terapia con un psicólogo online o cerca de tu zona.
            </p>
          </div>
          <div className="col-md-7">
            <div className="d-flex flex-wrap">
              <div className="col-md-4">
                <div className="card-service wow fadeInUp">
                  <div
                    className="header"
                    style={{
                      marginBottom: '-80px',
                      textAlign: 'left'
                    }}
                  >
                    <img
                      alt=""
                      src="https://doodleipsum.com/160x263/flat?i=2bd3af0d2f06a2fa52032589873857fd"
                      style={{
                        position: 'relative',
                        right: '20px',
                        top: '-32px',
                        width: '160px'
                      }}
                    />
                  </div>
                  <div className="body">
                    <h5
                      className="text-secondary"
                      style={{
                        fontSize: '1.10rem'
                      }}
                    >
                      Ánimo
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-service wow fadeInUp" >
                  <div
                    className="header"
                    style={{
                      marginBottom: '-80px',
                      textAlign: 'left'
                    }}
                  >
                    <img
                      alt=""
                      src="https://doodleipsum.com/160x263/abstract?i=80ac55adfd99147758c3dc6a9771fc40"
                      style={{
                        position: 'relative',
                        right: '20px',
                        top: '-32px',
                        width: '160px'
                      }}
                    />
                  </div>
                  <div className="body">
                    <h5
                      className="text-secondary"
                      style={{
                        fontSize: '1.10rem'
                      }}
                    >
                      Relaciones <br /> Personales
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-service wow fadeInUp" >
                  <div
                    className="header"
                    style={{
                      marginBottom: '-80px',
                      textAlign: 'left'
                    }}
                  >
                    <img
                      alt=""
                      src="https://doodleipsum.com/160x263/flat?i=9891b8f98924e0af9a27ebea31114e9a"
                      style={{
                        position: 'relative',
                        right: '20px',
                        top: '-32px',
                        width: '160px'
                      }}
                    />
                  </div>
                  <div className="body">
                    <h5
                      className="text-secondary"
                      style={{
                        fontSize: '1.10rem'
                      }}
                    >
                      Miedos
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-service wow fadeInUp">
                  <div
                    className="header"
                    style={{
                      marginBottom: '-80px',
                      textAlign: 'left'
                    }}
                  >
                    <img
                      alt=""
                      src="https://doodleipsum.com/160x263/outline?i=5ab2f67c138d27ecd527e23a908cab67"
                      style={{
                        position: 'relative',
                        right: '20px',
                        top: '-32px',
                        width: '160px'
                      }}
                    />
                  </div>
                  <div className="body">
                    <h5
                      className="text-secondary"
                      style={{
                        fontSize: '1.10rem'
                      }}
                    >
                      Autoestima e <br /> Inseguridad
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
