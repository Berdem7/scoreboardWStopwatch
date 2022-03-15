import React from "react";

class StopWatch extends React.Component{
    state ={
        isRunning:false,
        sec:0,
        min:0,
        hr:0
    }

    componentDidMount(){
        this.intervalID = setInterval(()=>this.state.isRunning && this.tick(), 10)
    }

    // componentWillUnmount(){
    //     clearInterval(this.intervalID)
    // }

    tick = ()=>{
        
        if(this.state.isRunning){
            this.setState((prevState)=>({
                sec:  prevState.sec += 1,
                
                // }))
                
            })
            
            // console.log(Date.now())
            )
            if (this.state.sec == 100) {
                this.setState((prevState)=>({
                    sec: prevState.sec - 100,
                    min: prevState.min += 1
                }))
        //  this.state.min = prevState.min + 1;
        //  this.state.sec = 0;
     }
        if (this.state.min == 60) {
            this.setState((prevState)=>({
                min: prevState.min - 60,
                hr: prevState.hr += 1
            }))
        }
        }
        }

    handleStopwatch =()=>{
        console.log(Date.now())
        this.setState(prevState=>({
            isRunning: !prevState.isRunning,
            // sec:this.state.sec,
            
        }))
        console.log(this.state);
}


resetTimer =()=> {
    this.setState({
        isRunning:false,
        sec:0,
        min:0,
        hr:0
    })
}

render (){
    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{this.state.hr <10 ? "0"+this.state.hr :this.state.hr} m :{this.state.min <10 ? "0"+this.state.min :this.state.min} s :{this.state.sec <10 ? "0"+this.state.sec :this.state.sec} ms</span>
            <button className="" onClick={this.handleStopwatch}>{this.state.isRunning ? "Stop" : "Start"}</button>
            {/* <button className="" onClick={()=>this.stopTimer()}>Stop timer</button> */}
            <button className="" onClick={this.resetTimer}>Reset timer</button>
            <div className="stopwatch"></div>
            {/* <Counter id={props.id} index={props.index} score={props.score} incrementScore={props.incrementScore} decrementScore={props.decrementScore}/> */}
        </div>
    )

}
    

}
export default StopWatch