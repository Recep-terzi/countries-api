import { useState } from "react";
import { Route, Router, Routes, useParams } from "react-router-dom/dist";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
