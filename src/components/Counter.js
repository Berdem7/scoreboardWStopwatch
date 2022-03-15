import React from 'react'

function Counter (props){
  
    // decrementScore(){
    //     if(this.state.score>0){
  
    //         this.setState((prevState)=>({
    //             score: prevState.score-1
    //         }))
    //     }
    // }
  
    // incrementScore(){
    //     this.setState((prevState)=>({
    //         score: prevState.score+1
    //     }))
    // }
 
        
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={()=>props.incrementScore(props.index, -1)}>-</button>
                <span className="counter-score">{props.score}</span>
                <button className="counter-action increment" onClick={()=>props.incrementScore(props.index, 1)}>+</button>
            </div>
        )
  
  }

export default Counter