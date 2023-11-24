// BasicInfoPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../Contexts/FormContext";

function BasicInfoPage() {
  const navigate = useNavigate();

  const { userData, setUserData } = useFormContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      basic: {
        ...prevUserData.basic,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <h2>Basic Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userData?.basic.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={userData.basic.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button
        onClick={() => {
          navigate("address");
        }}
      >
        {"Next"}
      </button>
    </div>
  );
}

export default BasicInfoPage;
