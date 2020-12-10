import {GET_CARDS,ADD_CARD,DELETE_CARD,ADD_CARDEDECK,DELETE_CARDEDECK,NUMBER_OFCARD} from '../constants/constants.js';
const initialState ={
    CardsLoaded: [],
    Deck:[],
    extraDeck:[],
    numberOfCard:0
}
/* function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    console.log("arr",arr)
    console.log("value",value)
    console.log("index",index)
    if (index > -1) {
      arr.splice(index, 1);
    }
    console.log("arr segunda vez",arr)
    return arr;
  } */
export default (state = initialState,action) =>{

    switch (action.type){
        case GET_CARDS:
            {
                return{
                    ...state,
                    CardsLoaded: action.payload
                }
            }

        case ADD_CARD:
            {
                return{
                    ...state,
                    Deck: state.Deck.concat(action.card)
                }
            }

        case ADD_CARDEDECK:
            {
                return{
                    ...state,
                    extraDeck: state.extraDeck.concat(action.card)
                }
            }

        case NUMBER_OFCARD:
            {

                return{
                    ...state,
                    numberOfCard: (state.Deck.filter( card => card.name !== action.card.name)).length

                }
            }

        case DELETE_CARD:
            {

                let index = state.Deck.indexOf(action.card);
                let deckfiltered=state.Deck;
                if (index > -1) {
                    deckfiltered.splice(index, 1);
                }

                //console.log("DECKFILTERED",deckfiltered)
                state.Deck=deckfiltered;
                //console.log("STATE.DECK",state.Deck)
                
                
                return{
                    ...state,
                    Deck: state.Deck.splice(0,state.Deck.length)
                }
            }

            case DELETE_CARDEDECK:
            {

                let index = state.extraDeck.indexOf(action.card);
                let extraDeckFiltered=state.extraDeck;
                if (index > -1) {
                    extraDeckFiltered.splice(index, 1);
                }

                //console.log("DECKFILTERED",deckfiltered)
                state.extraDeck=extraDeckFiltered;
                //console.log("STATE.extraDECK",state.extraDeck)
                
                
                return{
                    ...state,
                    extraDeck: state.extraDeck.splice(0,state.extraDeck.length)
                }
            }
           
        default:
            return state;
    }
}