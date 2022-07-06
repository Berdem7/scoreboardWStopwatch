import React, { useEffect, useState } from "react";

function StopWatch (props){
    const [isRunning, setIsRunning] = useState(false);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hr, setHr] = useState(0);


        console.log(isRunning);
        console.log(sec);


    useEffect(()=>{
        if(isRunning){
            const intervalID = 
        setInterval(()=> tick(), 10)
        console.log("itsw")
        return ()=>{
            clearInterval(intervalID)
        }
    }
        }
        ,[isRunning,sec]
    )
    
        const tick = () => {
            if(isRunning==true){
                console.log("itsrunning")
                setSec(sec=>sec+1)
                if(sec==100){
                    setSec(sec=>sec-100)
                    setMin(min=>min+1)
                }
                if(min==60){
                    setMin(min=>min-60)
                    setHr(hr=>hr+1)
                }
            }
        }

 const   handleStopwatch =()=>{
        setIsRunning(isRunning=>!isRunning)
}


const resetTimer =()=> {
    setHr(0)
    setMin(0)
    setSec(0)
    setIsRunning(false)
}

    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{hr <10 ? "0"+hr :hr} m :{min <10 ? "0"+min :min} s :{sec <10 ? "0"+sec :sec} ms</span>
            <button className="" onClick={handleStopwatch}>{isRunning ? "Stop" : "Start"}</button>
            {/* <button className="" onClick={()=>this.stopTimer()}>Stop timer</button> */}
            <button className="" onClick={resetTimer}>Reset timer</button>
            <div className="stopwatch"></div>
            {/* <Counter id={props.id} index={props.index} score={props.score} incrementScore={props.incrementScore} decrementScore={props.decrementScore}/> */}
        </div>
    )

}
    

export default StopWatch