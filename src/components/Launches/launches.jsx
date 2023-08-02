import React from "react";
import LaunchesItem from "../LaunchesItem/launchesItem";

function Launches(props) {
  const {launches} = props;

  return(
    <>
      {launches.map(launch => (
        <LaunchesItem key={launch.id} launch={launch}/>
      ))}
    </>
  )
}

export default Launches;