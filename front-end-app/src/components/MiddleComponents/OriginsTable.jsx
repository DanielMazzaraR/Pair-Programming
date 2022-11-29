import "./OriginsTable.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import OriginCard from "./OriginCard.jsx";

const DUMMY_ORIGINS = [
  {
    id: "0",
    city: "Madrid",
  },
  {
    id: "1",
    city: "Sevilla",
  },
  {
    id: "3",
    city: "Barcelona",
  },
  {
    id: "4",
    city: "Valencia",
  },
  {
    id: "5",
    city: "Bilbao",
  },
];

function OriginsTable(props) {
  return (
    <div className={props.nameClass}>
      <div className="originsTable-toprow">
        <OriginCard name={DUMMY_ORIGINS[0].city} />
        <OriginCard name={DUMMY_ORIGINS[1].city} />
        <OriginCard name={DUMMY_ORIGINS[2].city} />
      </div>
      <div className="originsTable-bottomrow">
        <OriginCard name={DUMMY_ORIGINS[3].city} />
        <OriginCard name={DUMMY_ORIGINS[4].city} />
      </div>
    </div>
  );
}

export default OriginsTable;
