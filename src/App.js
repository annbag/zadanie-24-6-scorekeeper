import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';

class App extends Component {
 constructor() {
   super();

   this.state = {
     players: [
      {
        name: 'Adam',
        score: 5,
      },
      {
        name: 'Daniel',
        score: 0,
      }
    ]
   }
 }

 render() {
   return (
     <div className="App">
       <PlayersList players={this.state.players} />
     </div>
   );
 }
}

export default App;