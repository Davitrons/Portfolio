export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#hero">Mi Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">Sobre mí</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
