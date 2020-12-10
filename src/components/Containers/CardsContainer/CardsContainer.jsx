
import Card from '../../Card/Card.jsx';
import React from 'react'
import Style from "./CardsContainer.module.css"

function CardsContainer(props) {
    
        //console.log("YGOCARD",ygoCards)
        const cards=props.ygoCards;
        //console.log("SEARCH de cards container",ygoCards.search)
        return(
            
            <div className={Style.contenedorCarta} id="style-2">
                {(cards)? cards.map((ygoCard,idx) => 
                    <Card Card={ygoCard} from={props.from} key={idx}/>
                ):<div></div>}
            </div>
                
        )
       
    
}



export default CardsContainer