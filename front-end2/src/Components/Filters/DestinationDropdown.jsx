import "./DestinationDropdown.css";

const DUMMY_DESTINATIONS = [
  {
    id: 0,
    city: "All destinations",
    value: "all",
  },
  {
    id: 1,
    city: "Roma",
    value: "roma",
  },
  {
    id: 2,
    city: "Berlin",
    value: "berlin",
  },
  {
    id: 3,
    city: "Paris",
    value: "paris",
  },
];

function DestinationDropdown(props) {

  const onDropdownChangeHandler = (e) => {
    props.onParentCallback(e.target.value);
  };
  let select_origins = DUMMY_DESTINATIONS.map((origin) => {
    return (
      <option key={origin.id} value={origin.value}>
        {origin.city}
      </option>
    );
  });

  return (
    <div>
      <label htmlFor="destinationFilter">Select destination </label>
      <select
        id="destinationF"
        name="destinationFilter"
        style={{ width: "120px" }}
        onChange={onDropdownChangeHandler}
      >
        {select_origins}
      </select>
    </div>
  );
}

export default DestinationDropdown;
