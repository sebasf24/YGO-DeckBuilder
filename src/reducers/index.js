import {GET_CARDS} from '../actions';
const initialState ={
    CardsLoaded: []
}
export default (state = initialState,action) =>{

    switch (action.type){
        case GET_CARDS:
            {
                return{
                    ...state,
                    CardsLoaded: action.payload
                }
            }
           
        default:
            return state;
    }
}