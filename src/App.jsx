import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import OurPortfolio from "./Components/OurPortfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<OurPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
