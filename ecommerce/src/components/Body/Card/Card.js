import React, { useState } from 'react';
import './Card.css'

const GIFTS = ['https://media.giphy.com/media/yDwRsn9XHKkirwTqWK/giphy.gif','https://media.giphy.com/media/yDwRsn9XHKkirwTqWK/giphy.gif']

function Card() {
    const [gifs, setGifs] = useState(GIFTS);



    return (
        <div className="card-item">
            <img src= {gifs} />
        </div>
    );
  }
  
  export default Card;
  