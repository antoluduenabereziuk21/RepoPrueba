import "../assets/styles/components/Header.scss";
import logoONG from "../assets/multimedia/logo/logo-somos-mas.png";

function Header() {
  const itemsNav = [
    "Inicio",
    "Nosotros",
    "Actividades",
    "Novedades",
    "Testimonios",
    "Contacto",
    "Contribuye",
  ];

  return (
    <header>
      <figure>
        <img src={logoONG} alt="Logo SOMOS ONG" />
      </figure>

      <nav>
        <ul>
          {itemsNav.map((item, index) => (
            <li key={index}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <button className="button login">Log in</button>
        <button className="button signup">Registrate</button>
      </div>
    </header>
  );
}

export { Header };
