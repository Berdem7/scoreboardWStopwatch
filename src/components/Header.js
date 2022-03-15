import React from "react";
import Stats from "./Stats";
import StopWatch from "./StopWatch";

function Header(props){
    return (
    <header>
      <Stats players={props.totalPlayers} points={props.totalPoints}/>
        <h1>{props.title}</h1>
        {/* <span className="stats">Total Players: {props.totalPlayers}</span> */}
        <StopWatch/>
    </header>)
  }

export default Header