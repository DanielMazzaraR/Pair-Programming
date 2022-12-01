import './OriginsDropdown.css';

const DUMMY_ORIGINS = [
  {
    id: 0,
    city: "All origins",
    value: "all",
  },
  {
    id: 1,
    city: "Barcelona",
    value: "barcelona",
  },
  {
    id: 2,
    city: "Sevilla",
    value: "sevilla",
  },
  {
    id: 3,
    city: "Madrid",
    value: "madrid",
  },
];

function OriginsDropdown(props) {

    const onDropdownChangeHandler = (e) => {
        props.onParentCallback(e.target.value)
    }

  let select_origins = DUMMY_ORIGINS.map((origin) => {
    return (
      <option key={origin.id} value={origin.value}>
        {origin.city}
      </option>
    );
  });

  return (
    <div>
      <label htmlFor="originsFilter">Select origin </label>
      <select
        id="originF"
        name="originsFilter"
        style={{ width: "120px" }}
        onChange={onDropdownChangeHandler}
      >
        {select_origins}
      </select>
    </div>
  );
}

export default OriginsDropdown;
