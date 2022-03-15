import React from 'react'
import Counter from './Counter'

function Player (props){

    // func1(){
    //     indexNo = handler(index);
    //     console.log(indexNo)
    // }
        return(
            <div className="player">
                <div className="player-name">
                <button className="remove-player" onClick={()=>props.deleteDataX(props.id)}>✖</button>
                    {props.name}
                </div>
                <Counter id={props.id} index={props.index} score={props.score} incrementScore={props.incrementScore} decrementScore={props.decrementScore}/>
            </div>
        )
  
  
  }

export default Player