import React, { useContext, useState } from "react";

import { UserContextProps, UserDetails } from "../types/userDetails";

const defaultState = {
  userData: {
    basic: { name: "", email: "" },
    address: { street: "", city: "", state: "" },
  } as UserDetails,
  setUserData: (data: UserDetails) => {},
} as UserContextProps;

const UserContext = React.createContext<UserContextProps>(defaultState);

interface MyProviderProps {
  children: React.ReactNode;
}
const UserProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserDetails>(
    defaultState.userData as UserDetails
  );
  const contextValue = {
    userData,
    setUserData,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUserContext };
