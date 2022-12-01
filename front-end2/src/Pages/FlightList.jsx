import axios from "axios";
import { useState } from "react";
import "./FlightList.css";
import AllFilters from "../Components/AllFilters";

function FlightList() {

  const onAllFiltersCallbackHandler = (origin, destination, airline) => {
    
  }

  return (
    <div className="flight-list__base">
      <h1>Flight List</h1>
      <div className="flight-list__filters">
        <AllFilters onParentCallback={onAllFiltersCallbackHandler}/>
      </div>
    </div>
  );
}

export default FlightList;
