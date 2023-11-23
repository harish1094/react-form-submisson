// App.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../Contexts/FormContext";

function SubmitPage() {
  const navigate = useNavigate();
  const { userData } = useFormContext();

  const handleSubmit = () => {
    // Handle submission of userData
    console.log("Submitted data:", userData);
  };

  return (
    <div>
      <h2>Submit Page</h2>
      <p>Data to submit:</p>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
      <br />
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
          <button onClick={handleSubmit}>Submit</button>
        </Col>
      </Row>
    </div>
  );
}

export default SubmitPage;
