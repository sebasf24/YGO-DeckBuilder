
import Card from '../../Card/Card.jsx';
import React from 'react'
import Style from "./CardsContainer.module.css"

function CardsContainer(ygoCards) {
    
        console.log("YGOCARD",ygoCards)
        const cards=ygoCards.ygoCards;
        //console.log("SEARCH de cards container",ygoCards.search)
        return(
            
            <div className={Style.contenedorCarta} id="style-2">
                {(cards)? cards.map(ygoCard => 
                    <Card Card={ygoCard} search={ygoCards.search} ></Card>
                ):<div></div>}
            </div>
                
        )
       
    
}



export default CardsContainer