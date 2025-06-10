// src/contexts/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([{ username: "admin", password: "123" }]);
  const [user, setUser] = useState(null);

  const login = ({ username, password }) => {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const registrar = (username, password) => {
    if (users.some((u) => u.username === username)) {
      return false;
    }
    setUsers((prev) => [...prev, { username, password }]);
    return true;
  };

  const logout = () => setUser(null);
  
  return (
    <AuthContext.Provider value={{ user, login, logout, registrar }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
