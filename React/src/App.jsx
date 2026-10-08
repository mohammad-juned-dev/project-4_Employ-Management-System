import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedinUserData, setLoggedinUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (!authData) return;

    const storedUser = localStorage.getItem("loggedInUser");
    if (!storedUser) return;

    try {
      const loggedInUser = JSON.parse(storedUser);
      if (loggedInUser.role === "employee") {
        // Older saved sessions only stored the role; ask the user to log in again.
        if (!loggedInUser.email) {
          localStorage.removeItem("loggedInUser");
          setUser(null);
          return;
        }
        const employee = authData.employee.find(
          (item) => item.email === loggedInUser.email,
        );
        if (!employee) {
          localStorage.removeItem("loggedInUser");
          setUser(null);
          return;
        }
        setLoggedinUserData(employee ?? null);
      }
      setUser(loggedInUser);
    } catch {
      localStorage.removeItem("loggedInUser");
      setUser(null);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      console.log(user);
    } else if (authData) {
      const employee = authData.employee.find((e) => {
        return email === e.email && password === e.password;
      });
      if (employee) {
        setLoggedinUserData(employee);
        setUser({ role: "employee" });
        console.log(user);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", email: employee.email }),
        );
      }
    } else {
      alert("invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedinUserData(null);
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role === "admin" ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : user?.role === "employee" ? (
        <EmployeeDashboard data={loggedinUserData} onLogout={handleLogout} />
      ) : null}
    </>
  );
};

export default App;
