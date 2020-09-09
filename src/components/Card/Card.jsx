import React from 'react';

function Card(Card){
    const carta = Card.Card;
    if(carta.Card.data === undefined){
        return(
            <div>
                <h1>...Cargando</h1>
            </div>
        )
    }else{
        return(
            <div>
                <ul>
                {carta.Card.data.map(e => 
                    <li key={e.id}><img src={e.card_images[0].image_url}/></li>
                )}
                </ul>
                {/* {console.log(carta.Card.data[0])}
                <img src={carta.Card.data[0].card_images[0].image_url}/> */}
            </div>
        )
    }
}



export default Card;