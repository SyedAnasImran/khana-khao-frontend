import ChooseSpotPage from "./Pages/ChooseSpot.jsx";
import RegistrationPage from "./Pages/Registration.jsx";
import Protected from "./utils/ProtectedRoutes.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          ProtectedRoutes
          <Route path="/auth" element={<RegistrationPage />} />
          <Route
            path="/"
            element={<Protected component={<ChooseSpotPage />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
