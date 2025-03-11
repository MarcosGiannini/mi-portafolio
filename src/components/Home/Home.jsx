import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";

function Home({ setShowHeader }) {
  const navigate = useNavigate();
  const [showStart, setShowStart] = useState(!sessionStorage.getItem("visited"));

  useEffect(() => {
    if (!showStart) {
      navigate("/home");
    }
  }, [showStart, navigate]);

  const handleStartClick = () => {
    sessionStorage.setItem("visited", "true");
    setShowStart(false);
    setShowHeader(true); // Mostrar el header al hacer clic
  };

  return (
    <div className={styles.homeContainer}>
      {showStart ? (
        <div className={styles.startScreen}>
          <button className={styles.startBtn} onClick={handleStartClick}>
            START
          </button>
        </div>
      ) : (
        <div className={styles.content}></div>
      )}
    </div>
  );
}

export default Home;
