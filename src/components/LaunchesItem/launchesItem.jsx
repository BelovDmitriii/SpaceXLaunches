import React from "react";

function LaunchesItem (props) {
  const {launch} = props;
  return(
    <div style={{width:"60%", textAlign:"center", margin:"auto"}}>
    <div>
      <h2>{launch.mission_name}</h2>
      <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
      <p>{launch.details}</p>
    </div>
  <div style={{height:"250px", width:"100%"}}>
    <img style={{height:"90%"}} src={launch.links.flickr.original[launch.links.flickr.original.length - 1]} alt='rocket' />
  </div>
  </div>
  );
}

export default LaunchesItem;