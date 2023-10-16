import ChooseSpotPage from "./Pages/ChooseSpot.jsx";
import RegistrationPage from "./Pages/Registration.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/ChooseSpot" element={<ChooseSpotPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
