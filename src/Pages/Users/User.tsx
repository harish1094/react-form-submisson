// App.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>List of Users</h2>
      <br />
      <br />
      <pre>{"No user found"}</pre>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col md="auto">
          <button
            onClick={() => {
              navigate("/users/new");
            }}
          >
            {"Click here to add user"}
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default Users;
