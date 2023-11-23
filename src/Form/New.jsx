// NewForm.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddressPage from "./Address";
import BasicInfoPage from "./BasicInfo";
import { MyProvider } from "./MyContext";
import SubmitPage from "./Submit";

function NewForm() {
    return (
        <MyProvider>
            <div>
                <h1>Form Submission</h1>
                <Routes>
                    <Route path="" element={<BasicInfoPage />} />
                    <Route path="/address" element={<AddressPage />} />
                    <Route path="/submit" element={<SubmitPage />} />
                </Routes>
            </div>
        </MyProvider>
    );
}

export default NewForm;
