import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ person }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const fillData = () => {
      if (Object.keys(person).length !== 0) {
        setData(person);
      }
    };
    fillData();
  }, [person]);

  const onInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const requestBody = JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    });
    const requestHeader = { "Content-Type": "application/json" };

    if (Object.keys(person).length === 0) {
      fetch("/api/person", {
        method: "POST",
        body: requestBody,
        headers: requestHeader,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/");
        })
        .catch((err) => console.error(err));
    } else {
      fetch(`/api/person/${person.id}`, {
        method: "PUT",
        body: requestBody,
        headers: requestHeader,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="inputFirstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          name="firstName"
          value={data.firstName}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputLastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputLastName"
          name="lastName"
          value={data.lastName}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          name="email"
          value={data.email}
          onChange={onInputChange}
        />
      </div>

      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  );
};

export default Form;
