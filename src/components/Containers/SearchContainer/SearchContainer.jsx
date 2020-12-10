import React from 'react';
import {useSelector} from 'react-redux'
import SearchBar from './Searchbar'
import CardsContainer from '../CardsContainer/CardsContainer';
import Style from './SearchContainer.module.css'


export default function SearchContainer(){
    const CardsLoaded= useSelector(state=>state.CardsLoaded.data)
    
    return(
        <div className={Style.SearchContainer}>
            <div className={Style.SearchBar}><SearchBar/></div>
            <div className={Style.CardsContainer}><CardsContainer ygoCards={CardsLoaded} from={"search"}/></div>
        </div>
    )
}