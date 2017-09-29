let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
   {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
   {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const stopWatch = () => {
  return (
    <div className="stopwatch">
      <h2>STOPWATCH</h2>
      <h1 className="stopwatch-time">0</h1>
      <button>start</button><button>reset</button>
    </div>
  );
}

const Header = ({players}) => {
  let score = 0;
  let totalPlayers = players.length;
  for (var i in players) {
    score += parseInt(players[i].score);
  }
  return (
    <div>
      <header className="header">
        <table className="stats">
          <td >PLAYERS: <h1>{totalPlayers}</h1></td>
          <td >TOTAL POINTS: <h1 >{score}</h1></td>
        </table>
        {stopWatch()}
      </header>
    </div>
  );
}

const getPlayersList = (players) => {
  return players.map((player, index) => {
    return (
      <li key={index}>
        <div className="player">
          <p className="player-name">{player.name}</p>
          <div className="counter">
            <button className="player-score counter-action decrement">-</button>
            <p className="counter-score">{player.score}</p>
            <button className="player-score counter-action increment">+</button>
          </div>
        </div>
      </li >

    );
  });
}


const PlayerList = ({ players }) => {
  return (
    <ul>{getPlayersList(players)}</ul>
  );
}

const PlayerForm = () => {
  return (
    <div className="add-player-form">
      <form action="">
        <input type="text" placeholder="Enter a name" />
        <input  type="submit" placeholder="Add player" />
      </form>
    </div>
  );
}

const Application = ({title, players}) => {
   return (
    <div  className="scoreboard">
      <Header players={players}/>
      <PlayerList players={players}/>
      <PlayerForm /> 
    </div>   
   );
}


ReactDOM.render(
  <Application title="Scoreboard" players = {PLAYERS}/>, 
  document.getElementById('container')
);