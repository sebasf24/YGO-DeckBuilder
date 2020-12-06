import {GET_CARDS,ADD_CARD,DELETE_CARD} from "../constants/constants.js"
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

export function deleteCardDeck(card){
  return {type: DELETE_CARD, card}
}

