import React from "react";
import LaunchesItem from "../LaunchesItem/launchesItem";
import './launches-container.css';

function Launches({launches}) {
  return(
    <>
      <div className="launches__container">        
        {launches && launches.map(launch => 
          <LaunchesItem key={launch.id} launch={launch} />
          )}
      </div>
    </>
  )
}

export default Launches;