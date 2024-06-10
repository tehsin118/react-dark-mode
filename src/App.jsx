import { useEffect, useState } from "react";
import "./style/main.scss";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Button from "./components/button";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* adjust button style acc to requirments */}
      <Button
        onClick={toggleTheme}
        className="btn "
        text={
          theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
        }
      ></Button>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
