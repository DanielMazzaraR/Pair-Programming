import axios from "axios";
import { useState } from "react";

const api = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
});

function FlightList() {
  const [joke, setJoke] = useState("");
  const [punchLine, setPunchline] = useState("");

  const getData = () => {
    api.get('/').then((response) => {
        console.log(response.data);
    })
  };

  return (
    <div className="flight-list__base">
      <h1>Flight List</h1>
      <h1>Hola</h1>
      <button onClick={getData}>Film</button>
      <h4>{joke}</h4>
      <h4>{punchLine}</h4>
    </div>
  );
}

export default FlightList;
