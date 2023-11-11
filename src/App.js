import ChooseSpotPage from "./Pages/ChooseSpot.jsx";
import RegistrationPage from "./Pages/Registration.jsx";
import Protected from "./utils/ProtectedRoutes.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  {
    /* {<RegistrationPage />} */
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<RegistrationPage />} />
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
