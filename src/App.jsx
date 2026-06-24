import { useState } from 'react';
import './App.css';
import Card from './Card';
import movies from './movies';



const App = (key) => {
  const [index, setCurrentCard] = useState(0);
  const [shuffledCards, setShuffledCards] = useState(movies);
  const [guess, setGuess] = useState(""); //user guess
  const [correct, setCorrect] = useState(null);   //correct answer
  const [score, setScore] = useState(0);

  const shuffleDeck = () => {
    const shuffled = [...movies].sort(() => Math.random() - 0.5); 
    setShuffledCards(shuffled); //reordered the movie array into shuffledCards
  }
  // Code to add guess
  const handleChange = (e) => {
    setGuess(e.target.value);
  }
  //checks if the guess matches the answer -> correct = true, false or null
  const checkAnswer = () => {
  const userGuess = guess.toLowerCase().trim();
  const realAnswer = shuffledCards[index].name.toLowerCase().trim();
  setCorrect(realAnswer.includes(userGuess));
  //sets the users score
  if(realAnswer.includes(userGuess)){
    setScore(score + 1);
  }

}

  return (
    
    <div className="App">
      <div className='header'>
        <h1>Movie Emoji Quiz!</h1>
        <p>How good is your movie recognition skills? Test them right here with this quiz!</p>
        <p>Number of cards: {movies.length}</p>
        <p>Number of correct answers: {score}/{movies.length}</p>
      </div>

      <div className='cards'>
      <Card key={index} card={shuffledCards[index]}/>

      </div>
      <div className='input'>
        <label>Guess the movie: </label>
        <input type="text" value={guess} onChange={handleChange} 
        placeholder='Enter your answer'
        className={correct === true ? "correct" : correct === false ? "wrong" : ""}/>
        <button className='submit' onClick={checkAnswer}>Submit Guess</button>

      </div>

      <div className='buttons'>
        <button onClick={() => {
          setCurrentCard(index - 1);
          setCorrect(null); //resets 
          setGuess(''); 
          }} disabled={index === 0}> ← </button> 

        <button onClick={() => {
          setCurrentCard(index + 1);
          setCorrect(null);
          setGuess(''); 
          }} disabled={index === movies.length - 1}> → </button>
        <button className='shuffle' onClick={() => {
          shuffleDeck();
          setCorrect(null); 
          setGuess(''); 
          }}> Shuffle Cards </button>  
      </div>
      


    </div>
  )
}

export default App