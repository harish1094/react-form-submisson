// BasicInfoPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Contexts/UserContext";

function BasicInfoPage() {
  const navigate = useNavigate();

  const { userData, setUserData } = useUserContext();

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
          navigate("/users/address");
        }}
      >
        {"Next"}
      </button>
    </div>
  );
}

export default BasicInfoPage;
