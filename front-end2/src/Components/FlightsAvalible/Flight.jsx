import "./Flight.css";

function Flight(props) {
  //props => origen | destination | airline | price

  return (
    <div className="flight-card">
      <h1 className="flight-title">
        {" "}
        {props.origen.toUpperCase()} =={">"} {props.destination.toUpperCase()}{" "}
      </h1>
      <h4 className="flight-price">Airline: {props.airline}</h4>
      <h4 className="flight-price">BUY NOW: {props.price}</h4>
    </div>
  );
}

export default Flight;
