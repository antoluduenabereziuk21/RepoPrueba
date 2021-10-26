import "../assets/styles/components/Footer.scss";
import logoONG from "../assets/multimedia/logo/logo-somos-mas.png";

function Footer() {
  return (
    <footer>
      <section className="footer-nav">
        <ul className="list-left">
          <li>
            <a href="/">Noticias</a>
          </li>
          <li>
            <a href="/">Actividades</a>
          </li>
          <li>
            <a href="/">Novedades</a>
          </li>
        </ul>
        <figure>
          <img src={logoONG} alt="Logo SOMOS ONG" />
        </figure>
        <ul className="list-right">
          <li>
            <a href="/">Testimonios</a>
          </li>
          <li>
            <a href="/">Nosotros</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </section>
      <div className="socialMedia">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
        <p>2021 by Alkemy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export { Footer };
