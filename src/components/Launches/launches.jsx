import React from "react";
import LaunchesItem from "../LaunchesItem/launchesItem";

function Launches({launches}) {
  return(
    <>
      <div>        
        {launches && launches.map(launch => 
          <LaunchesItem key={launch.id} launch={launch} />
          )}
      </div>
    </>
  )
}

export default Launches;