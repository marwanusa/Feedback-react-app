import "./App.css";
import React, { useState } from "react";
import Rating from "./components/Rating";
import Feedback from "./components/Feedback";
export const RateContext = React.createContext();

function App() {
  const [rate, setRate] = useState(0);
  const [isClicked, setIsClicked] = useState(false) ;
  return (
    <div className="app-container">
      <RateContext.Provider value={{ isClicked, setIsClicked,rate,setRate }}>
        {isClicked ? <Feedback /> : <Rating />}
      </RateContext.Provider>
    </div>
  );
}

export default App;
