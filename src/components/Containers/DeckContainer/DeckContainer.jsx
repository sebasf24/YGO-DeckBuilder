import React from 'react'
import CardsContainer from '../CardsContainer/CardsContainer'
import Style from './DeckContainer.module.css'
import {useSelector} from 'react-redux'

export default function DeckContainer(){

    const Deck = useSelector(state=>state.Deck)
    const extraDeck = useSelector(state=>state.extraDeck);
    //console.log("DECK",Deck)
    return(
        <div className={Style.DeckContainer}>
          <div className={Style.saveDeck}>GUARDAR MAZO</div>
          <div className={Style.Deck}>
            <CardsContainer ygoCards={Deck} from={"deck"}/>
             <div className={Style.extraDeck}>
            <CardsContainer ygoCards={extraDeck} from={"extraDeck"} />
             </div>
          </div>
          
          {/* <div className={Style.deckextra}>deckextra</div> */}
        </div>
    )
}