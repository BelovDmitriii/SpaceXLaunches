import React from "react";
import LaunchesItem from "../LaunchesItem/launchesItem";
import { useGetLaunchesQuery } from "../../reducers/api/api";

function Launches() {
  const {data: allLaunches,error, isLoading} = useGetLaunchesQuery();
  // const filteredLaunches = allLaunches
  // .filter(item => item.success)
  // .filter(item => new Date(item.date_local).getFullYear() >= 2015 
  // && new Date(item.date_local).getFullYear() <= 2019);

  // const sortedLaunches = filteredLaunches.sort(
  //   sortOrder === "ascending"
  //     ? (a, b) => new Date (b.date_utc) - new Date(a.date_utc)
  //     : (a, b) => new Date (a.date_utc) - new Date(b.date_utc)
  // )

  return(
    <>
      <div>        
        {isLoading && <h1>Загрузка...</h1>}
        {error && <h2>Ошибка загрузки...</h2>}
        {allLaunches && allLaunches.map(launch => 
          <LaunchesItem key={launch.id} launch={launch} />
          )}
      </div>
    </>
  )
}

export default Launches;