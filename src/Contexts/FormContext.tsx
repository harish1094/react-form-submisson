import React, { useContext, useState } from "react";

import { UserContextProps, UserDetails } from "../types/userDetails.ts";

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
const FormProvider: React.FC<MyProviderProps> = ({ children }) => {
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

const useFormContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export { FormProvider, useFormContext };
