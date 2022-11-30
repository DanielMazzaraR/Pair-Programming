import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import FlightList from "./Pages/FlightList";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./App.css";

const DUMMY_USER = "admin";
  
  


function App() {



  const logedUserCallback = () => {
    console.log("Parent Callback");
    return<Navigate to='flights' replace={true}/>
  }


  return (
    <div className="App">
      <Sidebar>
        <Menu>
          <MenuItem routerLink={<Link to="/" />}>Home</MenuItem>
          <MenuItem routerLink={<Link to="/login" />}>Login</MenuItem>
          <MenuItem routerLink={<Link to="/signup" />}>Sign up</MenuItem>
          <MenuItem routerLink={<Link to="/flights" />}>Flights</MenuItem>
        </Menu>
      </Sidebar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login/*"
          element={
            <LogIn user={DUMMY_USER} AppCallBack={logedUserCallback} />
          }
        />
        <Route path="/flights" element={<FlightList/>}/>
        <Route path="/signup" element={<SignUp />} />
        
        {/* <Route path='/flights'>
          <Route path="/madrid"></Route>
        </Route> */}
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
