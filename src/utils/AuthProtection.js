import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/*
This Component is used only to protect Registration Page 
Such that the User is prevented to access login page after logging in
*/

function ProtectedRoutes(props) {
  const { component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    // if auhtenticated return to home route
    let auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  }, []);

  //   else return registration component
  return component;
}
export default ProtectedRoutes;
