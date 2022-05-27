import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CreatePerson from "./pages/CreatePerson";
import ShowPersons from "./pages/ShowPersons";
import UpdatePerson from "./pages/UpdatePerson";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/persons")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [data]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowPersons data={data} />} />
        <Route path="/add" element={<CreatePerson />} />
        <Route path="/update/:id" element={<UpdatePerson />} />
      </Routes>
    </div>
  );
};

export default App;
