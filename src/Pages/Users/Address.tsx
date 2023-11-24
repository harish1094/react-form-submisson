// AddressPage.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Contexts/UserContext";

const AddressPage: React.FC = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      address: {
        ...prevUserData.address,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <h2>Address Information</h2>
      <label>
        Street:
        <input
          type="text"
          name="street"
          value={userData.address.street}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={userData.address.city}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="state"
          value={userData.address.state}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <br />
      <Row>
        <Col md="auto">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            {"Back"}
          </button>
        </Col>
        <div style={{ width: 50 }} />
        <Col md="auto">
          <button
            onClick={() => {
              navigate("/users/submit");
            }}
          >
            {"Next"}
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default AddressPage;
