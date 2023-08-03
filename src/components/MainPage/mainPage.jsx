import React, { useState } from "react";
import Launches from "../Launches/launches";
import Button from "../Button/button";
import { useGetLaunchesQuery } from "../../reducers/api/api";
import './main-page.css';

function SpaceXLaunches() {
  const [sortOrder, setSortOrder] = useState("ascending");
  const {data: allLaunches = [], error, isLoading} = useGetLaunchesQuery();

  const handleSortChange = () => {
    setSortOrder(value => value === "ascending" ? "descending" : "ascending");
  }

  const filteredLaunches = allLaunches
    .filter(item => item.success)
    .filter(item => new Date(item.date_local).getFullYear() >= 2015 
      && new Date(item.date_local).getFullYear() <= 2019);

  const sortedLaunches = filteredLaunches.sort(
    sortOrder === "ascending"
      ? (a, b) => new Date (b.date_utc) - new Date(a.date_utc)
      : (a, b) => new Date (a.date_utc) - new Date(b.date_utc)
  )

  return (
    <>
      <Button 
        onClick={handleSortChange} 
        text={sortOrder === "descending" ? "Sort by Newest" : "Sort by Oldest"}
      />
      <div className="main-page__container">
        {isLoading && <h2>...Loading...</h2>}
        {error && <h2>Ошибка загрузки...</h2>}
        <Launches launches={sortedLaunches}/>
      </div>
    </>
  );
}

export default SpaceXLaunches;