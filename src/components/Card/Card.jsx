import React from 'react';
import Style from './Card.module.css'
import {useDispatch} from 'react-redux'
import {addCardToDeck,deleteCardDeck} from '../../Redux/actions'

function Card(Card){
    const dispatch = useDispatch();
    //console.log("SEARCH de card",Card.search)
    const handleCard= (e) =>{
        if(Card.search){
            dispatch(addCardToDeck(ygoCard))
        }else{
            dispatch(deleteCardDeck(ygoCard))
        }
        
    }
    const ygoCard = Card.Card;
        return(
            <div className={Style.carta} onClick={handleCard}>
                {/* <img src={ygoCard.card_images[0].image_url} alt=""/> */}
                {/*ygoCard.card_images.map(img => <img src={img.image_url} alt=""/>)*/}
                <img src={ygoCard.card_images[0].image_url} alt="" className={Style.image}/>
            </div>
        )
    
}



export default Card;