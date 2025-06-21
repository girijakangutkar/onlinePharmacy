import { createContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContextType = createContext("");

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContextType.Provider value={{ user }}>
      {children}
    </AuthContextType.Provider>
  );
};

export default AuthContext;
