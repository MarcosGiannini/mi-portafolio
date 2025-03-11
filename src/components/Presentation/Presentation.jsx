import styles from "./presentation.module.scss";
import profileImg from "../../assets/profile.png";

function Presentation() {
  return (
    <section className={styles.presentation}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Hola, soy Marcos Giannini</h1>
          <p>
            Desarrollador Front-End en formación con experiencia en liderazgo de equipos y creación de contenido interactivo con JavaScript, HTML y CSS.
          </p>
          <p>
            Actualmente estoy cursando el máster de Front-End en Lemoncode y colaboro en proyectos open-source como QuickMock, donde resuelvo issues y mejoro funcionalidades.
          </p>
          <div className={styles.buttons}>
            <a href="#projects" className={styles.button}>Ver Proyectos</a>
            <a href="#contact" className={styles.buttonOutline}>Contactar</a>
          </div>
        </div>
        <div className={styles.image}>
          <img src={profileImg} alt="Marcos Giannini" />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
