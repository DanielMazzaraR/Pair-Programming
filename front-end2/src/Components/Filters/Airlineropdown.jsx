import "./AirlineDropdown.css";

const DUMMY_AIRLINE = [
  {
    id: 0,
    city: "All Airlines",
    value: "all",
  },
  {
    id: 1,
    city: "MyFlight",
    value: "myflight",
  },
  {
    id: 2,
    city: "Ryan Air",
    value: "ryanair",
  },
  {
    id: 3,
    city: "Qatar Airlines",
    value: "quatarairlines",
  },
];

function AirlineDropdown(props) {
  const onDropdownChangeHandler = (e) => {
    props.onParentCallback(e.target.value);
  };

  let select_airline = DUMMY_AIRLINE.map((airline) => {
    return (
      <option key={airline.id} value={airline.value}>
        {airline.city}
      </option>
    );
  });

  return (
    <div>
      <label htmlFor="airlineFilter">Select Airline </label>
      <select
        id="airlineF"
        name="airlineFilter"
        style={{ width: "120px" }}
        onChange={onDropdownChangeHandler}
      >
        {select_airline}
      </select>
    </div>
  );
}

export default AirlineDropdown;
