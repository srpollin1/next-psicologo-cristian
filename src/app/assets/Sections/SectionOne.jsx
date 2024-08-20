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
              {' '}puedo{' '}
              <br />
              {' '}ayudarte?
            </h1>
            <br />
            <br />
            
            <p id='texto-como-ayudar'>
              Todos atravesamos momentos difíciles, desde{' '}
              
              inseguridades personales hasta problemas en nuestras{' '}
              
              relaciones. Te invitamos a que empieces a transformar tu{' '}
              
              vida en terapia ya sea online o de manera presencial.{' '}

              Puedo ayudarte con temas como el ánimo, los miedos, las relaciones interpersonales, la autoestima y la inseguridad.
            </p>
          </div>
          <div className="col-md-7">
            <div className="d-flex flex-wrap">
              <div className="col-md-4">
                <div className="card-service wow fadeInUp">
                  <div
                    className="header"
                    style={{
                      marginBottom: '-60px',
                      textAlign: 'left'
                    }}
                  >
                    <img
                      alt=""
                      src="/assets/img/all-image/SectionOne/Animo.png"
                      style={{
                        position: 'relative',
                        right: '20px',
                        top: '-60px',
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
                      marginBottom: '-60px',
                      textAlign: 'left'
                    }}
                  >
                    <img
                      alt=""
                      src="/assets/img/all-image/SectionOne/Miedos.png"
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
                      src="/assets/img/all-image/SectionOne/Relaciones interpersonales.png"
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
                      src="/assets/img/all-image/SectionOne/Autoestima.png"
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
