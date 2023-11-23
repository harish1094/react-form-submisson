// NewForm.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { FormProvider } from "../../Contexts/FormContext";
import AddressPage from "./Address";
import BasicInfoPage from "./BasicInfo";
import SubmitPage from "./Submit";

function NewForm() {
  return (
    <FormProvider>
      <div>
        <h1>Form Submission</h1>
        <Routes>
          <Route path="" element={<BasicInfoPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/submit" element={<SubmitPage />} />
        </Routes>
      </div>
    </FormProvider>
  );
}

export default NewForm;
