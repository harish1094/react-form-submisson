// FormContext.tsx
import React, { createContext, useContext, useState } from "react";
import { UserDetails } from "../types/userDetails";

interface UserContextProps {
  userData: UserDetails;
  setUserData: React.Dispatch<React.SetStateAction<UserDetails>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface FormProviderProps {
  children: React.ReactNode;
}

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserDetails>({
    basic: { name: "", email: "" },
    address: { street: "", city: "", state: "" },
  });

  const contextValue = { userData, setUserData };

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
