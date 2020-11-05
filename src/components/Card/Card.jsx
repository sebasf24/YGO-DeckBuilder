import React from 'react';
import Style from './Card.module.css'

function Card(Card){
    const ygoCard = Card.Card;
        return(
            <div className={Style.carta}>
                <img src={ygoCard.card_images[0].image_url} alt=""/>
                {/*ygoCard.card_images.map(img => <img src={img.image_url} alt=""/>)*/}
                {/* <img src={ygoCard.card_images[0].image_url_small} alt=""/> */}
            </div>
        )
    
}



export default Card;