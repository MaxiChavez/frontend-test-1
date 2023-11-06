import "./App.css";
import Home from "./pages/home/Home";
import Camera from "./pages/home/Camera/Camera";
import Results from "./pages/Results/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="camera" element={<Camera />} />
          <Route path="results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
