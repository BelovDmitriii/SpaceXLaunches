import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = 'https://api.spacexdata.com/v3/launches';

function SpaceXLaunches() {
  const [launches, setLaunches] = useState([]);
  const [sortOrder, setSortOrder] = useState("descending");

  useEffect(() => {
    axios.get(BASE_URL, {
      params: {
        start: "2015-01-01",
        end: "2019-12-31",
        success: true,
      },
    })
      .then(response => setLaunches(response.data))
      .catch(error => console.log(error));
  }, []);

  const sortLaunches = () => {
    if (sortOrder === "descending") {
      setLaunches(launches.sort((a, b) => new Date(b.launch_date_utc) - new Date(a.launch_date_utc)));
      setSortOrder("ascending");
    } else {
      setLaunches(launches.sort((a, b) => new Date(a.launch_date_utc) - new Date(b.launch_date_utc)));
      setSortOrder("descending");
    }
  };

  return (
    <div>
      <button onClick={sortLaunches}>{sortOrder === "descending" ? "Sort by Oldest" : "Sort by Newest"}</button>
      {launches.map(launch => (
        <div key={launch.flight_number}>
          <h2>{launch.mission_name}</h2>
          <p>{new Date(launch.launch_date_utc).toLocaleDateString()}</p>
          <p>{launch.details}</p>
          <img src={launch.rocket.image_url} alt={launch.rocket.rocket_name} />
        </div>
      ))}
    </div>
  );
}

export default SpaceXLaunches;