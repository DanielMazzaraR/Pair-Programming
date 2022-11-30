import React, { useState, useRef } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import FlightList from "./FlightList";

function LogIn(props) {
  const [currentUsers, setCurrentUsers] = useState();
  const inputUserRef = useRef();

  const onSubmithandler = (event) => {
    if(props.user === inputUserRef.current.value){
        event.preventDefault()
        props.AppCallBack();
    }
  };

  

  return (
    <>
      <h1>This is login page</h1>
      <form>
        <input placeholder="User" type="text" ref={inputUserRef}></input>
        <button onClick={onSubmithandler}>Check</button>
      </form>
    </>
  );
}

export default LogIn;
