import React from "react";

function AddPlayerComp(props){
    return(
        <div className="player">

            <form className="player-name">
              {/* <label className="player-name">Enter player's name</label> */}
            <input type="text" id="namex" name="Name" placeholder="Name"></input>
            <input type="text" id="pointx" name="Point" placeholder="Score"></input>
            {/* <input type="text" id="idx" name="ID"></input> */}
            <button className="submit-button" type="button" name="submit" onClick={()=>props.addPlayer()}>Add player</button>
            </form>
  
        </div>
    )
  }

export default AddPlayerComp