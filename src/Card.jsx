import { useState } from 'react';

const Card = ({ card }) => {
  const [flip, setFlip] = useState(false);

  return (
    /* i got some help from cluade to help me with dividing the div classes with corresponding styling 
        essentially, if card is flipped, it turns to "card flipped" but if not its just "card"
    */
    <div className={`card ${flip ? "flipped" : ""}`} onClick={() => setFlip(!flip)}> 
     <div className="card-inner">
        <div className="card-front">
          <p>{card.emoji}</p>
        </div>
        <div className="card-back">
          <p>{card.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;