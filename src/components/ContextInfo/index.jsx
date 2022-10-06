import React, { createContext, useState, useEffect } from "react";
const ContextProvider = createContext();
const ContextInfo = ({ children }) => {
  const [info, setInfo] = useState([]);
  const changeInfo = (obj) => {
    console.log(obj);
    setInfo([...info, obj]);
  };
  const [posX, setPosX] = useState([]);
  const changePosX = (_x) => {
    setPosX(_x);
  };
  const [posY, setPosY] = useState([]);
  const changePosY = (_y) => {
    setPosY(_y);
  };
  useEffect(() => {});
  return (
    <ContextProvider.Provider
      value={{ info, changeInfo, posX, changePosX, posY, changePosY }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export {ContextProvider, ContextInfo};
