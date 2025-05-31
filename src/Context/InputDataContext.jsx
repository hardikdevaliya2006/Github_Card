import { createContext, useState } from "react";

export const InputDataContext = createContext();

export const InputDataProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [themeColor, setThemeColor] = useState("#28cba4");
  const [selectedEmoji, setEmoji] = useState("👻");

  return (
    <InputDataContext.Provider
      value={{
        userName,
        themeColor,
        selectedEmoji,
        setUserName,
        setThemeColor,
        setEmoji,
      }}
    >
      {children}
    </InputDataContext.Provider>
  );
};
