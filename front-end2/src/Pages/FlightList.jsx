import axios from "axios";
import { useState } from "react";
import "./FlightList.css";
import AllFilters from "../Components/AllFilters";
import FlightLL from "../Components/FlightsAvalible/FlightsLL";

function FlightList() {
  const [currentOrigin, setOrigin] = useState("all");
  const [currentDestination, setDestination] = useState("all");
  const [currentAirline, setAirline] = useState("all");

  const onAllFiltersCallbackHandler = (origin, destination, airline) => {
    setOrigin((prevOrigin) => (prevOrigin = origin));
    setDestination((prevOrigin) => (prevOrigin = destination));
    setAirline((prevOrigin) => (prevOrigin = airline));
  };

  return (
    <div className="flight-list__base">
      <h1>Flight List</h1>
      <div className="flight-list__filters">
        <AllFilters onParentCallback={onAllFiltersCallbackHandler} />
        <FlightLL 
          originFilter={currentOrigin}
          destinationFilter={currentDestination}
          airlineFilter={currentAirline}
        />
      </div>
    </div>
  );
}

export default FlightList;
