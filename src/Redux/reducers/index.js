import {GET_CARDS,ADD_CARD,DELETE_CARD} from '../constants/constants.js';
const initialState ={
    CardsLoaded: [],
    Deck:[]
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

        case DELETE_CARD:
            {

                var index = state.Deck.indexOf(action.card);
                var deckfiltered=state.Deck;
                if (index > -1) {
                    deckfiltered.splice(index, 1);
                }

                console.log("DECKFILTERED",deckfiltered)
                state.Deck=deckfiltered;
                console.log("STATE.DECK",state.Deck)
                
                
                return{
                    ...state,
                    Deck: state.Deck.splice(0,state.Deck.length)
                }
            }
           
        default:
            return state;
    }
}