import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes(props) {
  const { component } = props;
  const navigate = useNavigate();

  //  user get authentcaion
  async function getAuth() {
    const url = "http://localhost:5000/auth";
    let res = await fetch(url);
    res = await res.json();
    return res;
  }

  useEffect(() => {
    getAuth().then((res) => {
      // if not authorized redirect to /auth
      if (!res) navigate("/auth");
    });
  }, []);

  //   else return home component
  return component;
}
export default ProtectedRoutes;
