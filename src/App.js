import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ToursList from "./components/ToursList/ToursList";

function App() {
  return (
    <div>
      <NavBar />
      <ToursList></ToursList>
    </div>
  );
}

export default App;
