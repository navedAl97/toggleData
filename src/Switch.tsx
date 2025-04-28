import  { useEffect, useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }
  }, [darkMode]);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1>{darkMode ? "Dark Mode ON" : "Light Mode ON"}</h1>
      <h2>This is Dark Mode</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, error obcaecati! Eligendi quod saepe esse neque officiis quas. Laudantium, sint.</p>
      <button  
        onClick={toggleTheme}
        style={{
          border: "1px solid blue",
          outline: "none",
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          marginTop: "20px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default App;
