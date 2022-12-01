import React, { useEffect, useState } from "react";
import OriginsDropdown from "./Filters/OriginsDropdown";
import DestinationDropdown from "./Filters/DestinationDropdown";
import AirlineDropdown from "./Filters/Airlineropdown";

function AllFilters(params) {
  const [currentOrigin, setOrigin] = useState("");
  const [currentDestination, setDestination] = useState("");
  const [currentAirline, setAirline] = useState("");

  //TODO: Actualizacion rapida de los useState => Hay que utilizar el mismo prop o una variable de JavaScript
  //TODO: que el valor se guarde en la variable en el primer render

  const onOriginsDropdownHandler = (props) => {
    setOrigin((prevOrigin) => (prevOrigin = props));
    params.onParentCallback(props, currentDestination, currentAirline);
  };

  const onDestinationDropdownHandler = (props) => {
    setDestination((prevOrigin) => (prevOrigin = props));
    params.onParentCallback(currentOrigin, props, currentAirline);
  };

  const onAirlineDropdownHandler = (props) => {
    setAirline((prevOrigin) => (prevOrigin = props));
    params.onParentCallback(currentOrigin, currentDestination, props);
  };

  return (
    <>
      <div>
        <h4>Filters</h4>
      </div>
      <div>
        <OriginsDropdown onParentCallback={onOriginsDropdownHandler} />
        <DestinationDropdown onParentCallback={onDestinationDropdownHandler} />
        <AirlineDropdown onParentCallback={onAirlineDropdownHandler} />
      </div>
    </>
  );
}

export default AllFilters;
