import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {

  const [toggle , setToggle] = useState("Table")


  return (
    <div className="App">
      <button onClick={()=>{
        setToggle(toggle=="Table" ? "Form":"Table")
      }} className="toggleForm">
        {toggle}
      </button>
      {/* Show component based on state */}

      {toggle=="Table" ? <Rentals/>:<AddHouse/>}
      
       {/* <Rentals/> */}
       {/* <AddHouse/> */}

      <br />
    </div>
  );
}

export default App;
