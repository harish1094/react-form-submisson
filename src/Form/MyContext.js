import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        basic: { name: "", email: "" },
        address: { street: "", city: "", state: "" }
    });

    const contextValue = {
        userData,
        setUserData
    };

    return (
        <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    );
};

const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
};

export { MyProvider, useMyContext };
