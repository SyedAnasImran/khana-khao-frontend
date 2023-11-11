import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes(props) {
  const { component } = props;
  const navigate = useNavigate();

  //  user get authentcaion
  let auth = localStorage.getItem("token");

  useEffect(() => {
    if (!auth) {
      navigate("/reg");
    }
  }, []);

  //   else return home component
  return component;
}
export default ProtectedRoutes;
