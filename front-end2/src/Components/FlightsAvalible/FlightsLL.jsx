import Flight from "./Flight";

const DUMMY_FLIGHTS = [
  {
    id: 0,
    airline: "myflight",
    origin: "madrid",
    destination: "roma",
    date: null,
    price: 451,
  },
  {
    id: 1,
    airline: "ryanair",
    origin: "sevilla",
    destination: "paris",
    date: null,
    price: 785,
  },
  {
    id: 2,
    airline: "quatarairlines",
    origin: "barcelona",
    destination: "berlin",
    date: null,
    price: 671,
  },
  {
    id: 3,
    airline: "ryanair",
    origin: "barcelona",
    destination: "paris",
    date: null,
    price: 347,
  },
  {
    id: 4,
    airline: "ryanair",
    origin: "barcelona",
    destination: "paris",
    date: null,
    price: 954,
  },
];

function FlightLL(props) {
  let filterOrigin = props.originFilter;
  let filterDestination = props.destinationFilter;
  let finalList;
  let filterByOrigin = [];
  let filterByDestination = [];

  //Filtrado de vuelos por origen
  if (filterOrigin === "all") {
    finalList = DUMMY_FLIGHTS.map((flight) => {
      return (
        <Flight
          key={flight.id}
          origen={flight.origin}
          destination={flight.destination}
          airline={flight.airline}
          price={flight.price}
        />
      );
    });
  } else {
    DUMMY_FLIGHTS.filter((flight) => flight.origin === filterOrigin).map(
      (filteredFlight) => {
        return filterByOrigin.push(filteredFlight);
      }
    );

    finalList = filterByOrigin.map((flight) => {
      return (
        <Flight
          key={flight.id}
          origen={flight.origin}
          destination={flight.destination}
          airline={flight.airline}
          price={flight.price}
        />
      );
    });
  }

  //filtrado de vuelos por destino
  if (!(filterDestination === "all")) {
    finalList
      .filter((flight) => flight.destination === filterDestination)
      .map((filteredFlights) => {
        return( <Flight
            key={filteredFlights.id}
            origen={filteredFlights.origin}
            destination={filteredFlights.destination}
            airline={filteredFlights.airline}
            price={filteredFlights.price}
          />)
      });
  }

  return <div>{finalList}</div>;
}
export default FlightLL;
