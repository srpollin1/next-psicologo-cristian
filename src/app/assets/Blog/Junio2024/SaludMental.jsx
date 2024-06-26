// src/components/SaludMental.js
import React from 'react';

const SaludMental = () => {
  return (
    <>
     <div className="back-to-top"></div>
    <div className="page-section pt-5">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ul className="breadcrumb p-0 mb-0 bg-transparent">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="blog.html">Blog</a></li>
            <li className="breadcrumb-item active">Salud Mental</li>
          </ul>
        </nav>
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-single-wrap">
              <div className="header">
                <div className="post-thumb">
                  <img src="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg" alt="Salud Mental" />
                </div>
                <div className="meta-header">
                  <div className="post-author">
                    <div className="avatar">
                      <img src="../assets/img/logo.png" alt="Ps.Cristian Retamales" />
                    </div>
                    por <a href="#">Ps.Cristian Retamales</a>
                  </div>
                </div>
              </div>
              <h1 className="post-title">Consejos para Mantener una Buena Salud Mental</h1>
              <div className="post-meta">
                <div className="post-date">
                  <span className="icon">
                    <span className="mai-time-outline"></span>
                  </span> <a href="#">20 de Junio, 2024.</a>
                </div>
              </div>
              <div className="post-content">
                <p>Mantener una buena salud mental es esencial para una vida equilibrada. Aquí hay algunos consejos prácticos:</p>
                <ul>
                  <li><strong>Mantén una Rutina Diaria:</strong> Establece horarios regulares para tus actividades diarias.</li>
                  <li><strong>Ejercicio Regular:</strong> Haz actividad física diaria; mejora el ánimo y reduce el estrés.</li>
                  <li><strong>Alimentación Saludable:</strong> Una dieta equilibrada influye en tu bienestar mental.</li>
                  <li><strong>Sueño Adecuado:</strong> Duerme 7-9 horas cada noche para un buen descanso.</li>
                  <li><strong>Conéctate con Otros:</strong> Mantén relaciones significativas para apoyo emocional.</li>
                  <li><strong>Práctica la Atención Plena:</strong> Reduce el estrés con meditación diaria.</li>
                  <li><strong>Establece Metas Realistas:</strong> Fija objetivos alcanzables para sentirte realizado.</li>
                  <li><strong>Tiempo para Ti:</strong> Dedica tiempo a tus hobbies y actividades relajantes.</li>
                  <li><strong>Busca Ayuda Profesional:</strong> Consulta a un psicólogo si es necesario.</li>
                  <li><strong>Limita Sustancias Nocivas:</strong> Reduce el consumo de alcohol y tabaco.</li>
                  <li><strong>Practica la Gratitud:</strong> Reflexiona sobre las cosas por las que estás agradecido.</li>
                  <li><strong>Haz Voluntariado:</strong> Ayudar a otros mejora tu bienestar.</li>
                </ul>
                <p>Implementar estos consejos puede mejorar tu salud mental. ¡Cuida tu mente tanto como tu cuerpo!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="widget-box">
              <h4 className="widget-title">Categorías</h4>
              <div className="divider"></div>
              <ul className="categories">
                <li><a href="#">Salud Mental</a></li>
                <li><a href="#">Ansiedad</a></li>
                <li><a href="#">Depresión</a></li>
                <li><a href="#">Autestima</a></li>
                <li><a href="#">Crisis de pánico</a></li>
              </ul>
            </div>
            <div className="widget-box">
              <h4 className="widget-title">Post Recientes</h4>
              <div className="divider"></div>
              <div className="blog-item">
                <a className="post-thumb" href="#">
                  <img src="https://cdn.pixabay.com/photo/2017/01/30/02/20/mental-health-2019924_1280.jpg" alt="Salud Mental" />
                </a>
                <div className="content">
                  <h6 className="post-title"><a href="#">Salud Mental</a></h6>
                  <div className="meta">
                    <a href="#"><span className="mai-calendar"></span> July 12, 2018</a>
                    <a href="#"><span className="mai-person"></span> Admin</a>
                    <a href="#"><span className="mai-chatbubbles"></span> 19</a>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <a className="post-thumb" href="#">
                  <img src="https://cdn.pixabay.com/photo/2020/04/07/04/17/desperate-5011953_1280.jpg" alt="Depresión" />
                </a>
                <div className="content">
                  <h6 className="post-title"><a href="#">Depresión</a></h6>
                  <div className="meta">
                    <a href="#"><span className="mai-calendar"></span> July 12, 2018</a>
                    <a href="#"><span className="mai-person"></span> Admin</a>
                    <a href="#"><span className="mai-chatbubbles"></span> 19</a>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <a className="post-thumb" href="#">
                  <img src="https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_1280.jpg" alt="Relaciones Personales" />
                </a>
                <div className="content">
                  <h6 className="post-title"><a href="#">Relaciones Personales</a></h6>
                  <div className="meta">
                    <a href="#"><span className="mai-calendar"></span> July 12, 2018</a>
                    <a href="#"><span className="mai-person"></span> Admin</a>
                    <a href="#"><span className="mai-chatbubbles"></span> 19</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SaludMental;
