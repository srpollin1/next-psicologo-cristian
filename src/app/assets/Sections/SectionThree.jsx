import React from 'react';

const SectionThree = () => {
  return (
    <div className="col-lg" id="anuncio-1">
      <div className="card-service wow fadeInUp" style={{ height: '250px' }}>
        <div className="header" style={{ marginBottom: '-110px', textAlign: 'left' }}>
          <img
            alt=""
            src="/assets/img/all-image/Precios.png"
            style={{
              left: '235px',
              position: 'relative',
              top: '-32px',
              width: '334px'
            }}
          />
        </div>
        <div className="body" style={{ position: 'absolute', textAlign: 'left', top: '17px' }}>
          <h2>
            Elige la modalidad que{' '}
            <br />
            más te convenga
          </h2>
          <div style={{ display: 'flex' }}>
            <div className="col-lg-6">
              <div
                style={{
                  alignItems: 'center',
                  backgroundColor: '#6B9080',
                  borderRadius: '0.25rem',
                  color: 'var(--white)',
                  display: 'flex',
                  fontSize: '0.750rem',
                  fontWeight: '700',
                  height: '35px',
                  justifyContent: 'center',
                  letterSpacing: '1px',
                  margin: '0 0 5px',
                  textTransform: 'uppercase'
                }}
              >
                ONLINE
              </div>
              <h2>
                $15.000
              </h2>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  alignItems: 'center',
                  backgroundColor: '#6B9080',
                  borderRadius: '0.25rem',
                  color: 'var(--white)',
                  display: 'flex',
                  fontSize: '0.750rem',
                  fontWeight: '700',
                  height: '35px',
                  justifyContent: 'center',
                  letterSpacing: '1px',
                  margin: '0 0 5px',
                  textTransform: 'uppercase'
                }}
              >
                PRESENCIAL
              </div>
              <h2>
                $22.000
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
