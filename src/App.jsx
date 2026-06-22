import { useState } from 'react';
import './App.css';
import Card from './Card';
import movies from './movies';



const App = () => {
  const [index, setCurrentCard] = useState(0);


  return (
    
    <div className="App">
      <div className='header'>
        <h1>Movie Emoji Quiz!</h1>
        <p>How good is your movie recognition skills? Test them right here with this quiz!</p>
        <p>Number of cards: {movies.length}</p>
      </div>

      <div className='cards'>
      <Card index={index} card={movies[index]}/>

      </div>

      <button onClick={() => setCurrentCard(index - 1)} disabled={index === 0}> ← </button> 
      <button onClick={() => setCurrentCard(index + 1)}> → </button>
      <button onClick={() => setCurrentCard(Math.floor(Math.random() * movies.length))}> Shuffle Cards </button>


    </div>
  )
}

export default App