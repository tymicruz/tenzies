import './App.css';
import Game from './components/Game';
import { useState } from 'react';

function App() {

  const [reset, setReset] = useState(true)

  const [win, setWin] = useState(false)

  const [winningNumber, setWinningNumber] = useState(-1)

  const [moveCount, setMoveCount] = useState(0)

  const resetGame = () => {
    setReset(prev => !prev)
    setWin(false)
    setWinningNumber(-1)
    setMoveCount(0)
  }

  const incrementMoveCount = () => {
    setMoveCount(prevCount => prevCount + 1)
  }

  console.log("app")

  const playerWins = (_winningNumber) => {
    setWinningNumber(_winningNumber)
    if (_winningNumber != -1)
      setWin(true)
    else
      setWin(false)
  }

  return (
    <div className="app">
      <header className='app--header'>
        <div className='header--center'>
          <h1>{win ? `${winningNumber}s You win!` : "Tenzies"}</h1>
          <button onClick={resetGame}>Reset</button>
        </div>
        <div className='header--right'>
          <p>Move count: {moveCount}</p>
        </div>

      </header>

      <Game key={reset} playerWon={win} handleWin={playerWins} handleMoveCount={incrementMoveCount} />
    </div>
  );
}

export default App;
