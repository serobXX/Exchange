import { Routes, Route } from "react-router-dom";
import Exchange from "./pages/Exchange";
import Converter from "./pages/Converter";
import Mainpage from "./pages/Mainpage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />}>
        <Route path="" element={<Exchange />} />
        <Route path="/convert" element={<Converter />} />
      </Route>
    </Routes>
  );
}