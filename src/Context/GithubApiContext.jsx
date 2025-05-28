import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [themeColor, setThemeColor] = useState("#ffffff");

  return (
    <UserContext.Provider
      value={{
        userName,
        themeColor,
        setUserName,
        setThemeColor,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
