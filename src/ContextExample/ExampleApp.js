import React, { createContext, useEffect, useMemo, useState } from "react";
import { UserNameInput, UserInfo } from "./Layout";

export const UserContext = createContext({
  userName: "Unknown",
  setUserName: () => {},
});

export const ExampleApp = () => {
  const [userName, setUserName] = useState("Alex");
  const providerValue = useMemo(() => ({ userName, setUserName }), [userName]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setUserName("John");
  //     }, 2000);
  //   }, []);

  return (
    <UserContext.Provider value={providerValue}>
      <UserInfo />

      <br />
      <UserNameInput />
    </UserContext.Provider>
  );
};
