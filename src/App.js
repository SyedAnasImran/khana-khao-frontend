import ChooseSpotPage from "./Pages/ChooseSpot.jsx";
import RegistrationPage from "./Pages/Registration.jsx";
import Protected from "./utils/ProtectedRoutes.js";
import ProtectedAuth from "./utils/AuthProtection.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu.jsx";

/*
  "Protected" is a generic component
  "Protected Auth" protects RegistrationPage only 
*/

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Protected component={<ChooseSpotPage />} />}
          />
          <Route
            path="/reg"
            element={<ProtectedAuth component={<RegistrationPage />} />}
          />
          <Route path="/:cafe" element={<Protected component={<Menu />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
