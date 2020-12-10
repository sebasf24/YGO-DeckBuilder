import {GET_CARDS,ADD_CARD,DELETE_CARD,ADD_CARDEDECK,DELETE_CARDEDECK,NUMBER_OFCARD} from "../constants/constants.js"
import axios from 'axios'

export function getCards(nombre,arquetipo){
  if(nombre!==""){
    var mod="&fname";
    if(arquetipo){
      mod="&archetype";
    }
    nombre="="+nombre;
  }
  
  console.log(mod);
    return function (dispatch){
        return axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?format=duel links${mod}${nombre}`)
        .then(json => {
          dispatch({ type: GET_CARDS, payload: json.data });
        });
    };
}

export function addCardToDeck(card){
  return {type: ADD_CARD, card}
}

export function addCardToExtraDeck(card){
  return {type: ADD_CARDEDECK, card}
}

export function deleteCardDeck(card){
  return {type: DELETE_CARD, card}
}

export function obtainNumberOfCard(card){
  return {type: NUMBER_OFCARD, card}
}

export function deleteCardExtraDeck(card){
  return {type: DELETE_CARDEDECK, card}
}
