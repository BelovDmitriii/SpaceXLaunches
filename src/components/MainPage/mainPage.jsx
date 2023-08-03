import React, { useState } from "react";
import Launches from "../Launches/launches";
import Button from "../Button/button";

function SpaceXLaunches() {
  const [sortOrder, setSortOrder] = useState("ascending");

  const handleSortChange = () => {
    setSortOrder(value => value === "ascending" ? "descending" : "ascending");
  }

  return (
    <>
      <Button 
        onClick={handleSortChange} 
        text={sortOrder === "descending" ? "Sort by Newest" : "Sort by Oldest"}
      />
      <Launches />
    </>
  );
}

export default SpaceXLaunches;