import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  children: JSX.Element;
}
const ProtectedRoutes = ({ children }: IProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("logged")) {
      navigate("/login", { replace: true });
      return;
    }
    if (
      window.location.pathname === "/login" &&
      localStorage.getItem("logged") !== null
    ) {
      navigate("/", { replace: true });
      return;
    }
  }, []);

  return children;
};

export default ProtectedRoutes;
