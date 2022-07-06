import React from 'react';
import './App.css';
import Player from './components/Player';
// import Counter from './components/Counter';
import Header from './components/Header';
import AddPlayerComp from './components/AddPlayerComp';
import { useEffect, useState } from 'react';
// import StopWatch from './components/StopWatch';




function App (props){

    const [players, setPlayers] = useState([
        {name:"John",
          score:15,
          id:1},
          {name:"Ben",
          score:20,
          id:2},
          {name:"Jack",
          score:50,
          id:3},
          {name:"Jane",
          score:55,
          id:4},
          {name:"Lex",
          score:15,
          id:5},
          {name:"Rex",
          score:20,
          id:6},
          {name:"Pam",
          score:50,
          id:7},
          {name:"Liam",
          score:55,
          id:8}
    ])
//   state= {
//       players: [
//           {name:"John",
//           score:15,
//           id:1},
//           {name:"Ben",
//           score:20,
//           id:2},
//           {name:"Jack",
//           score:50,
//           id:3},
//           {name:"Jane",
//           score:55,
//           id:4},
//           {name:"Lex",
//           score:15,
//           id:5},
//           {name:"Rex",
//           score:20,
//           id:6},
//           {name:"Pam",
//           score:50,
//           id:7},
//           {name:"Liam",
//           score:55,
//           id:8}
//       ]
//   }

  const deleteData=(x)=>{
       setPlayers(players.filter(index=>index.id!==x))
            //   players: prevState.players.filter(index=>index.id!==x)
      }




  // updateItem=()=>{
  //   {this.state.players.map(
  //     player=>
  // <Player name ={player.name} score={player.score} key={player.id} id={player.id}/> )
  // }}

  const addPlayer=()=>{
      let nameX = document.getElementById("namex").value
      let scoreX = parseInt(document.getElementById("pointx").value)
      let newPlayers = [...players]
      let lastIndex = newPlayers.length-1
      let idX = newPlayers[lastIndex].id+1
        setPlayers([...players, {name:nameX, score:scoreX, id:idX}])
        document.getElementById("namex").value = "";
        document.getElementById("pointx").value = "";
    }
  
    //   decrementScore(){
    //     if(this.state.score>0){
  
    //         this.setState((prevState)=>({
    //             score: prevState.score-1
    //         }))
    //     }
    // }
  
    const incrementScore = (index, delta) =>{
        let updatedPlayers = [...players]
        let updatedPlayer = players[index]
        console.log(updatedPlayers[0].score);
        updatedPlayer.score += delta
        players[index]=updatedPlayer

        setPlayers(updatedPlayers)
    }
    
      return(
          <div className="scoreboard">
              {/* <StopWatch/> */}
              <Header title="Scoreboard" totalPlayers={players.length} totalPoints ={players.reduce((total,player)=>total+ player.score,0)}/>
              {players.map(
                  (player,index)=>
              <Player name ={player.name} index={index} score={player.score} key={player.id} id={player.id} 
              deleteDataX = {deleteData} incrementScore={incrementScore}
              />
              )}
              <AddPlayerComp addPlayer={addPlayer}/>

          </div>
      )
}


export default App;
