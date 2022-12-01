import React, { useRef } from "react";
import { useNavigate} from "react-router-dom";

function LogIn(props) {


  const inputUserRef = useRef();
  const navigate = useNavigate();

  const onSubmithandler = (event) => {
    if(props.user === inputUserRef.current.value){
        event.preventDefault()
        navigate('/flights');
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
