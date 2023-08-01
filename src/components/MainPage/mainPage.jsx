import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <button onClick={handleSortChange}>{sortOrder === "ascending" ? "Sort by Oldest" : "Sort by Newest"}</button>
      {launches.filter(item => Number(item.date_local.split('-')[0]) >= 2015 
        && Number(item.date_local.split('-')[0]) <= 2019 && item.success).reverse().map(launch => (
          <div key={launch.id}>
            <div>
              <h2>{launch.mission_name}</h2>
              <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
              <p>{launch.details}</p>
            </div>
          <div style={{height:"200px", width:"200px"}}>
            <img style={{height:"90%"}} src={launch.links.flickr.original[launch.links.flickr.original.length - 1]} alt='rocket' />
          </div>
          </div>
        ))}
    </>
  );
}

export default SpaceXLaunches;