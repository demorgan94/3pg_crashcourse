import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";

const UpdatePerson = () => {
  const location = useLocation();
  const { from } = location.state;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Form person={from} />
        </div>
      </div>
    </div>
  );
};

export default UpdatePerson;
