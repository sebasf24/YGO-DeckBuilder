export const GET_CARDS ="GET_CARDS";

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
        return fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?format=duel links${mod}${nombre}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_CARDS, payload: json });
        });
    };
}

