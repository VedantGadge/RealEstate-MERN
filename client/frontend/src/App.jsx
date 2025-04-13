import Website from "./pages/Website.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./components/Layout/Layout.jsx";
import Properties from "./pages/Properties/Properties.jsx";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Website />} />
          <Route path="/properties" element={<Properties/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
