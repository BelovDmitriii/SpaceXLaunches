import React, { useState, useEffect } from "react";
import axios from "axios";
import Launches from "../Launches/launches";

const BASE_URL = 'https://api.spacexdata.com';

function SpaceXLaunches() {
  const [launches, setLaunches] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    axios.get(`${BASE_URL}/v5/launches`)
      .then(response => setLaunches(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSortChange = () => {
    setSortOrder(value => value === "ascending" ? "descending" : "ascending");
  }

  const filteredLaunches = launches
  .filter(item => item.success)
  .filter(item => Number(item.date_local.split('-')[0]) >= 2015 
  && Number(item.date_local.split('-')[0]) <= 2019);

  const sortedLaunches = filteredLaunches.sort(
    sortOrder === "ascending"
      ? (a, b) => new Date (b.date_utc) - new Date(a.date_utc)
      : (a, b) => new Date (a.date_utc) - new Date(b.date_utc)
  )

  return (
    <>
      <button onClick={handleSortChange}>{sortOrder === "descending" ? "Sort by Oldest" : "Sort by Newest"}</button>
      <Launches launches={sortedLaunches} />
    </>
  );
}

export default SpaceXLaunches;