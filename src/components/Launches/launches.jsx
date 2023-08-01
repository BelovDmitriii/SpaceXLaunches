import React from "react";

function Launches(props) {
  const {launches} = props;
  return(
    <>
      {launches.filter(item => Number(item.date_local.split('-')[0]) >= 2015 
      && Number(item.date_local.split('-')[0]) <= 2019 && item.success).reverse().map(launch => (
        <div key={launch.id} style={{width:"60%", textAlign:"center", margin:"auto"}}>
          <div>
            <h2>{launch.mission_name}</h2>
            <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
            <p>{launch.details}</p>
          </div>
        <div style={{height:"250px", width:"100%"}}>
          <img style={{height:"90%"}} src={launch.links.flickr.original[launch.links.flickr.original.length - 1]} alt='rocket' />
        </div>
        </div>
      ))}
    </>
  )
}

export default Launches;