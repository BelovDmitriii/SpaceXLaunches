import React from "react";
import './launches-item.css';

function LaunchesItem (props) {
  const {launch} = props;
  return(
    <div className="launches_item">
      <div className="launches_item__mainInfo">
        <h2>{launch.name}</h2>
        <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
        <p>{launch.details}</p>
      </div>
      <div className="launches_item__image">
        <img className="img" src={launch.links.flickr.original[launch.links.flickr.original.length - 1]} alt='rocket' />
      </div>
    </div>
  );
}

export default LaunchesItem;