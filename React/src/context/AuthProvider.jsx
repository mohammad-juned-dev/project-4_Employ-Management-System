import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Seed the sample data after a full localStorage clear. Do not overwrite
    // existing employee/admin records during normal app startup.
    if (
      localStorage.getItem("employees") === null &&
      localStorage.getItem("admins") === null
    ) {
      setLocalStorage();
    }
    const { employee, admin } = getLocalStorage();
    setUserData({ employee, admin });
  },[]);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
