
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/loginadmin");
  }, [navigate]);

  return null;
};

export default AdminLogout;
