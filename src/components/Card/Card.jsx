import React,{useState} from 'react';
import Style from './Card.module.css'
import {useDispatch,useSelector} from 'react-redux'
import {addCardToDeck,deleteCardDeck,addCardToExtraDeck,deleteCardExtraDeck} from '../../Redux/actions'

function Card(props){
    const [cardInfo,setCardInfo] = useState(false)
    let numberOfThisCard = 0;
    const dispatch = useDispatch();
    //console.log("SEARCH de card",Card.search)
    const Deck = useSelector(state=>state.Deck)
    const extraDeck = useSelector(state=>state.extraDeck);


    
    const handleCard = (e) => {

        

        if (props.from === "search") {
            if(numberOfThisCard > 2){
                setCardInfo(true);
            }else{
                setCardInfo(false)
            }
            //setCardInfo(ygoCard.desc)

            if (ygoCard.type === "Synchro Monster" || ygoCard.type === "Fusion Monster" || ygoCard.type === "XYZ Monster") {
                 numberOfThisCard =(extraDeck.filter( card => card.name === ygoCard.name).length)
                 //console.log("NUMBER CARD EXTRA DECK",numberOfThisCard)
                if(numberOfThisCard <= 2){
                dispatch(addCardToExtraDeck(ygoCard))
                }
            } else {
                 numberOfThisCard = ((Deck.filter( card => card.name === ygoCard.name)).length)
                 //console.log("NUMBER CARD DECK",numberOfThisCard)

                if(numberOfThisCard <= 2){
                dispatch(addCardToDeck(ygoCard))
                }
            }



        } else {
            if (ygoCard.type === "Synchro Monster" || ygoCard.type === "Fusion Monster" || ygoCard.type === "XYZ Monster") {
                dispatch(deleteCardExtraDeck(ygoCard))
            } else {
                dispatch(deleteCardDeck(ygoCard))
            }

            setCardInfo(false)
        }

    }
    const ygoCard = props.Card;
    //setCardInfo(ygoCard.desc)
        return(
            <div className={Style.carta} onClick={handleCard}>
                {/* <img src={ygoCard.card_images[0].image_url} alt=""/> */}
                {/*ygoCard.card_images.map(img => <img src={img.image_url} alt=""/>)*/}
                <div className={Style.tooltip}>
         {cardInfo? <span className={Style.tooltiptext}>No puedes agregar mas unidades de esta carta</span>:<div></div>}
               
                <img src={ygoCard.card_images[0].image_url} alt="" className={Style.image}/>
                </div>
            </div>
        )
    
}



export default Card;