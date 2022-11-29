import React, {useState} from "react";
import './components/MiddlePart.jsx';

import "./App.css";
import MiddlePart from "./components/MiddlePart.jsx";

function App() {

  const [topPart_class, setTopPart_class] = useState("top-part");
  const [middlePart_class, setMiddlePart_class] = useState("middle-part");
  const [toppartTitle, setTopPartTitle] = useState("top-part-title");
  const [buttonTopPart, setbuttonTopPart] = useState("buttonTopPart")

  const onClickOurFlightsHandler = () => {
    setTopPart_class("top-part-active");
    setMiddlePart_class("middle-part-active");
    setTopPartTitle("top-part-title-active");
    setbuttonTopPart("buttonTopPart-active");
  }

  return (
    <div className="App">
      <div className={topPart_class}>
        <h1 className={toppartTitle}>Prepare for your new journey</h1>
        <button className={buttonTopPart} role="button" onClick={onClickOurFlightsHandler}>See our flights from Spain</button>
      </div>
      <MiddlePart nameClass = {middlePart_class}/>
      <footer className="bottom-part">

      </footer>
    </div>
  );
}

export default App;
