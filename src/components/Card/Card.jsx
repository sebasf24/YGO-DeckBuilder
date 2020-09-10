import React from 'react';

function Card(Card){
    const ygoCard = Card.Card;
        return(
            <div>
                <ul>
                {ygoCard.map(e => 
                    <li key={e.id}><img src={e.card_images[0].image_url} alt=""/></li>
                )}
                </ul>
            </div>
        )
    
}



export default Card;