export const GET_CARDS ="GET_CARDS";

export function getCards(nombre){
    return function (dispatch){
        return fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?format=duel links&fname=${nombre}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_CARDS, payload: json });
        });
    };
}

