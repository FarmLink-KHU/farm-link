// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HomePage from "./HomePage";
import FourBoxPage from "./FourBoxPage";
import JiwonPage from "./JiwonPage";

import "./App.css"
import "./HomePage.css";
import "./MainPage.css";
import "./FourBoxPage.css";
import "./JiwonPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/jiwon" element={<JiwonPage/>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/result" element={<FourBoxPage />} />
      </Routes>
    </Router>
  );
}
