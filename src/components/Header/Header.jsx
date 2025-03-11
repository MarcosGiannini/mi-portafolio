import { Link } from "react-router-dom";
import styles from "./header.module.scss"; // Importación correcta con CSS Modules

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Marcos Giannini</h1>
      <nav>
        <ul>
          <li><Link to="/main">Inicio</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/about">Sobre mí</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
