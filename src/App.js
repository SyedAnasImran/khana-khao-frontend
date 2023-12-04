import ChooseSpotPage from "./Pages/ClientScreens/ChooseSpot.jsx";
import RegistrationPage from "./Pages/RegistrationScreens/Registration.jsx";
import Protected from "./utils/ProtectedRoutes.js";
import ProtectedAuth from "./utils/AuthProtection.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./Pages/ClientScreens/MainMenu.jsx";
import MyOrders from "./Pages/ClientScreens/MyOrders.jsx";

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
          <Route
            path="/cafe/:cafe_name/:cafe_id"
            element={<Protected component={<MainMenu />} />}
          />
          <Route
            path="/cafe/:cafe_name/:cafe_id/MyOrders"
            element={<Protected component={<MyOrders />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
