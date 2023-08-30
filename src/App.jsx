import { useState, useEffect } from "react";

//
import "./style.css";

import TopBanner from "./components/TopBanner";
import AppSection from "./components/AppSection";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [todos, setTodos] = useState([]);
  const [section, setSection] = useState("all");

  useEffect(() => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  }, [darkTheme]);
  return (
    <>
      <TopBanner />
      <AppSection
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        todos={todos}
        setTodos={setTodos}
        section={section}
        setSection={setSection}
      />
    </>
  );
}

export default App;
