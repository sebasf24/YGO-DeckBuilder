import React from 'react'
import SearchContainer from '../Containers/SearchContainer/SearchContainer'
import DeckContainer from '../Containers/DeckContainer/DeckContainer'
import Style from './deckBuilder.module.css'


export default function DeckBuilder(){

    return(
        <div className={Style.container}>
            <div className={Style.search}><SearchContainer/></div>
            <div className={Style.deck}><DeckContainer/></div>
        </div>
    )
}