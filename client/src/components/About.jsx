import { useEffect } from "react";
import AOS from "aos";

// Importar íconos de react-icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiencia = [
    {
      cargo: "Profesor académico",
      empresa: "Sboza2",
      año: "2024 - Actualidad",
      desc: `• Desarrollar ejercicios para los alumnos de HTML/CSS y JavaScript / Correcciones de evaluaciones finales`,
    },
    {
      cargo: "Desarrollador Frontend",
      empresa: "Nexo Virtual Network S.L",
      año: "2022 - 2023",
      desc: "• Participación en los distintos sitios webs en los que participa la empresa / Diseño en parte de la imagen corporativa de la empresa / Gestión de datos de las empresas que pedían nuestros servicio / Atención a los clientes para resolución de problemas técnicos",
    },
    {
      cargo: "OLIBYTE SL",
      empresa: "Empresa C",
      año: "2020 - 2021",
      desc: "• Primer contacto profesional con HTML, CSS, JavaScript.",
    },
  ];

  const skills = [
    { name: 'React', icon: <FaReact />, highlight: true },
    { name: 'Node.js', icon: <FaNodeJs />, highlight: true },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'HTML', icon: <FaHtml5 />, highlight: true },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs />, highlight: true },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-5 text-center" data-aos="fade-up">
          Sobre mí
        </h2>

        {/* Dos columnas: sobre mí y experiencia */}
        <div className="row mb-5">
          {/* Columna: Sobre mí */}
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="p-4 rounded shadow bg-white h-100">
              <p>
                Me muevo con soltura tanto en el frontend como en el backend,
                utilizando tecnologías como JavaScript, React, Node.js, Python y
                bases de datos relacionales y no relacionales (PostgreSQL,
                MongoDB).
              </p>
              <p>
                Mi enfoque está en construir productos completos: desde una
                interfaz atractiva hasta una lógica de negocio sólida y
                eficiente. Disfruto entender a fondo el problema, diseñar
                soluciones limpias y trabajar en equipo para llevarlas a
                producción. Me gusta pensar que no solo escribo código, sino que
                construyo experiencias. También me motiva mantener buenas
                prácticas, aplicar principios de diseño de software y estar en
                constante evolución profesional.
              </p>
              <p>
                🔁 Siempre estoy buscando aprender algo nuevo, optimizar lo que
                ya sé y contribuir a proyectos que realmente generen valor.
              </p>
            </div>
          </div>

          {/* Columna: Experiencia profesional */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="p-4 rounded shadow bg-white h-100">
              <h4 className="mb-3">Experiencia Profesional</h4>
              <div className="timeline">
                {experiencia.map((exp, i) => (
                  <div
                    key={i}
                    className="mb-4"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <h5 className="mb-1">
                      {exp.cargo} -{" "}
                      <span className="text-primary">{exp.empresa}</span>
                    </h5>
                    <small className="text-muted">{exp.año}</small>
                    <p className="mt-2 mb-0">{exp.desc}</p>
                    {i !== experiencia.length - 1 && <hr />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bloque de skills */}
        <div data-aos="fade-up">
          <h3 className="text-center mb-4">Skills principales</h3>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className={`badge rounded-pill px-3 py-2 d-flex align-items-center gap-2 ${skill.highlight ? 'bg-warning text-dark fs-5 shadow' : 'bg-primary text-white fs-6'}`}
                data-aos="zoom-in"
                data-aos-delay={i * 50}
              >
                {skill.icon} {skill.name}
                {skill.highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
