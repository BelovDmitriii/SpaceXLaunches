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

  const sortLaunches = () => {
    if (sortOrder === "descending") {
      setLaunches(launches.sort((a, b) => new Date(b.date_utc) - new Date(a.date_utc)));
      setSortOrder("ascending");
    } else {
      setLaunches(launches.sort((a, b) => new Date(a.date_utc) - new Date(b.date_utc)));
      setSortOrder("descending");
    }
  };

  return (
    <div>
      <button onClick={sortLaunches}>{sortOrder === "descending" ? "Sort by Oldest" : "Sort by Newest"}</button>
      {launches.filter(item => Number(item.date_local.split('-')[0]) >= 2015 
        && Number(item.date_local.split('-')[0]) <= 2019 && item.success).map(launch => (
          <div key={launch.id}>
          <h2>{launch.mission_name}</h2>
          <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
          <p>{launch.details}</p>
          <img style={{width:"50%", height:"300px"}} src={launch.links.flickr.original[0]} alt={launch.rocket} />
        </div>
      ))}
    </div>
  );
}

export default SpaceXLaunches;