import './App.css';
import Game from './components/Game';
import { useState } from 'react';

function App() {

  const [rerenderReset, setRerenderReset] = useState(true)

  const resetGame = () => {
    setRerenderReset(prev => !prev)
  }

  return (
    <div className="app">
      <header className='app--header'>
        <h1>Tenzies</h1>
        <button onClick={resetGame}>Reset</button>
      </header>

      <Game key={rerenderReset} />
    </div>
  );
}

export default App;
