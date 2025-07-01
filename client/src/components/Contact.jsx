export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2>Contacto</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea className="form-control" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  );
}
