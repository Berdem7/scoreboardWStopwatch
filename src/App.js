import React from 'react';
import './App.css';
import Player from './components/Player';
// import Counter from './components/Counter';
import Header from './components/Header';
import AddPlayerComp from './components/AddPlayerComp';
// import StopWatch from './components/StopWatch';







class App extends React.Component{

  state= {
      players: [
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
      ]
  }

  deleteData=(x)=>{
      this.setState(prevState=>{
          
          return {

              players: prevState.players.filter(index=>index.id!==x)
          }
      })


  }

  // updateItem=()=>{
  //   {this.state.players.map(
  //     player=>
  // <Player name ={player.name} score={player.score} key={player.id} id={player.id}/> )
  // }}

  addPlayer=()=>{
      let nameX = document.getElementById("namex").value
      let scoreX = parseInt(document.getElementById("pointx").value)
      this.setState(prevState=>{
        let newPlayers = [...prevState.players]
        let lastIndex = newPlayers.length-1
        let idX = newPlayers[lastIndex].id+1
        let newPlayers2 = [...prevState.players, {name:nameX, score:scoreX, id:idX}]
        
          return{
              players:newPlayers2
          }
        }
        )
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
  
    incrementScore = (index, delta) =>{
        this.setState(prevState=>{
          let updatedPlayers = [...prevState.players]
          let updatedPlayer = updatedPlayers[index]
          updatedPlayer.score += delta
          updatedPlayers[index]=updatedPlayer

          return {
            players: updatedPlayers
          }
          

          // console.log(index);
        })
    }
    
  render(){
      return(
          <div className="scoreboard">
              {/* <StopWatch/> */}
              <Header title="Scoreboard" totalPlayers={this.state.players.length} totalPoints ={this.state.players.reduce((total,player)=>total+ player.score,0)}/>
              {this.state.players.map(
                  (player,index)=>
              <Player name ={player.name} index={index} score={player.score} key={player.id} id={player.id} 
              deleteDataX = {this.deleteData} incrementScore={this.incrementScore} decrementScore={this.decrementScore}
              />
              )}
              <AddPlayerComp addPlayer={this.addPlayer}/>

          </div>
      )
  }
}


export default App;
