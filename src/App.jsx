import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // Oculta el Header solo en la pantalla de inicio "/"
    setShowHeader(location.pathname !== "/");
  }, [location]);

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home setShowHeader={setShowHeader} />} />
        <Route path="/home" element={<Presentation />} />
      </Routes>
    </>
  );
}

export default App;
