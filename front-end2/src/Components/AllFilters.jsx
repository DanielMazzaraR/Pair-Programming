import React, { useEffect, useState } from "react";
import OriginsDropdown from "./Filters/OriginsDropdown";
import DestinationDropdown from "./Filters/DestinationDropdown";
import AirlineDropdown from "./Filters/Airlineropdown";

function AllFilters(props) {
  const [currentOrigin, setOrigin] = useState("");
  const [currentDestination, setDestination] = useState("");
  const [currentAirline, setAirline] = useState("");
  const [updateState, setUpdateState] = useState();

  //TODO: Actualizacion rapida de los useState
  //TODO: que el valor se guarde en la variable en el primer render

  useEffect(() => {
    props.onParentCallback(currentOrigin, currentDestination, currentAirline);

    console.log(currentOrigin, currentDestination, currentAirline);
  }, [currentOrigin, currentDestination, currentAirline]);

  const onOriginsDropdownHandler = (props) => {
    setOrigin((prevOrigin) => (prevOrigin = props));
  };

  const onDestinationDropdownHandler = (props) => {
    setDestination(props);
  };

  const onAirlineDropdownHandler = (props) => {
    setAirline(props);
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
