import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      My Portfolio
    </div>
  );
};

export default App;
