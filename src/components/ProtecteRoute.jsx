import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authData = localStorage.getItem("auth");

  if (!authData) {
    return <Navigate to="/sign-in" replace />;
  }

  const parsedData = JSON.parse(authData);

  // Expired session
  if (Date.now() > parsedData.expiry) {
    localStorage.removeItem("auth");
    return <Navigate to="/sign-in" replace />;
  }

  // Authenticated
  return children;
};

export default ProtectedRoute;
