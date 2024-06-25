import React from 'react';

const SectionThree = () => {
  return (
    <div className="col-lg" id="anuncio-1">
      <div className="card-service wow fadeInUp" style={{ height: '250px' }}>
        <div className="header" style={{ marginBottom: '-110px', textAlign: 'left' }}>
          <img
            alt=""
            src="https://doodleipsum.com/334x250?i=71b58d528ae31771a2ea8150fc47b7e9"
            style={{
              left: '420px',
              position: 'relative',
              top: '-32px',
              width: '334px'
            }}
          />
        </div>
        <div className="body" style={{ position: 'absolute', textAlign: 'left', top: '17px' }}>
          <h2>
            Elige la terapia que te{' '}
            <br />
            sea más cómoda
          </h2>
          <div style={{ display: 'flex' }}>
            <div className="col-lg-6">
              <div
                style={{
                  alignItems: 'center',
                  backgroundColor: '#6B9080',
                  borderRadius: '20px',
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
                $31.000
              </h2>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  alignItems: 'center',
                  backgroundColor: '#6B9080',
                  borderRadius: '20px',
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
                $36.000
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
