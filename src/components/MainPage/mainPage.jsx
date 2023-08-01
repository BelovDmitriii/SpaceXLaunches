import React, { useState, useEffect } from "react";
import axios from "axios";
import Launches from "../Launches/launches";

const URL = 'https://api.spacexdata.com';

function SpaceXLaunches() {
  const [launches, setLaunches] = useState([]);
  const [sortOrder, setSortOrder] = useState("descending");

  useEffect(() => {
    axios.get(`${URL}/v5/launches`)
      .then(response => setLaunches(response.data))
      .catch(error => console.log(error));
  }, []);

  const setSort = () => {
    sortOrder === "descending" ? setSortOrder("ascending") : setSortOrder("descending");
  };

  const handleSortChange = () => {
    sortOrder === 'descending' ? 
    setLaunches(launches.sort((a, b) => new Date(b.date_utc) - new Date(a.date_utc)))
    : setLaunches(launches.sort((a, b) => new Date(a.date_utc) - new Date(b.date_utc)));
    setSort();
  }

  return (
    <>
      <button onClick={handleSortChange}>{sortOrder === "descending" ? "Sort by Oldest" : "Sort by Newest"}</button>
      <Launches launches={launches} />
    </>
  );
}

export default SpaceXLaunches;