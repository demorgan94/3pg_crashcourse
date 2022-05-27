import React from "react";
import { NavLink } from "react-router-dom";
import Table from "../components/Table";

const ShowPersons = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Table data={data} />
          <div className="col-6 d-grid gap-2 mx-auto mt-3">
            <NavLink to="/add" className="btn btn-primary">
              Add
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPersons;
