import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType } from "../context/AuthContext";

export const useAuthCheck = () => {
  const { user, loading } = useContext(AuthContextType);
  const navigate = useNavigate();

  const requireAuth = (callback, redirectPath = "/login") => {
    if (loading) return false;

    if (!user) {
      localStorage.setItem("redirectAfterLogin", window.location.pathname);
      navigate(redirectPath);
      return false;
    }
    if (callback) callback();
    return true;
  };

  return {
    user,
    loading,
    requireAuth,
    isAuthenticated: !!user && !loading,
  };
};
