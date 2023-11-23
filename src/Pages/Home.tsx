import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <button
        onClick={() => {
          navigate("/form");
        }}
      >
        Submit Form
      </button>
    </div>
  );
};

export default Home;
