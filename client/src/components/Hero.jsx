import { useEffect } from 'react';
import AOS from 'aos';

export default function Hero() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="hero"
      className="vh-100 d-flex align-items-center justify-content-center text-white text-center"
      style={{
        background: 'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)',
      }}
    >
      <div className="container"
            data-aos="fade-up"
            style={{
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
          }}
      >
        <div className="row align-items-center">
          {/* Imagen de perfil */}
          <div className="col-md-4 mb-4 mb-md-0" data-aos="zoom-in">
            <img
              src="\img\DavidPerfil.jpeg" 
              alt="Foto de perfil"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Descripción y botones */}
          <div className="col-md-8" data-aos="fade-left">
            <h1 className="display-4 fw-bold">Hola, soy David</h1>
            <p className="lead">
              Como desarrollador fullstack, me
              especializo en transformar conceptos en soluciones digitales
              reales, escalables y bien estructuradas. Me muevo con soltura
              tanto en el frontend como en el backend, utilizando tecnologías
              como JavaScript, React, Node.js, Python y bases de datos
              relacionales y no relacionales (PostgreSQL, MongoDB). 
            </p>
          
            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
              <a href="/cv.pdf" download className="btn btn-warning">
                📄 Descargar CV
              </a>
              <a
                href="https://github.com/Davitrons"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                🐱 GitHub
              </a>
              <a
                href="https://linkedin.com/in/davidperezgarrido-fullstack"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info text-white"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
