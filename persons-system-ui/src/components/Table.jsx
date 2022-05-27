import React from "react";
import { NavLink } from "react-router-dom";

function Table({ data }) {
  const handleDelete = (id) => {
    fetch(`/api/person/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <table className="table">
      <thead className="table-light">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, i) => {
          return (
            <tr key={i}>
              <th scope="row">{value.id}</th>
              <td>{value.firstName}</td>
              <td>{value.lastName}</td>
              <td>{value.email}</td>
              <td className="d-flex">
                <NavLink
                  to={"/update/" + value.id}
                  state={{ from: value }}
                  className="btn btn-warning me-2"
                >
                  Edit
                </NavLink>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(value.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
