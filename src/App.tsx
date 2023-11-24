// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UserProvider } from "./Contexts/UserContext";
import Layout from "./Layout/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import AddressPage from "./Pages/Users/Address";
import BasicInfoPage from "./Pages/Users/BasicInfo";
import SubmitPage from "./Pages/Users/Submit";
import Users from "./Pages/Users/User";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route
            path="/users/"
            element={
              <UserProvider>
                <Users />
              </UserProvider>
            }
          />
          <Route
            path="/users/new"
            element={
              <UserProvider>
                <BasicInfoPage />
              </UserProvider>
            }
          />
          <Route
            path="/users/address"
            element={
              <UserProvider>
                <AddressPage />
              </UserProvider>
            }
          />
          <Route
            path="/users/submit"
            element={
              <UserProvider>
                <SubmitPage />
              </UserProvider>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
