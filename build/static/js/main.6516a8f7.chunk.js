(this["webpackJsonpduellinks-deckbuilder"]=this["webpackJsonpduellinks-deckbuilder"]||[]).push([[0],{16:function(e,t,n){e.exports={carta:"Card_carta__1L1oY"}},17:function(e,t,n){e.exports={contenedorCarta:"CardsContainer_contenedorCarta__1oB4T"}},18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),u=(n(23),n(24),n(1)),i=n(2),l=n(12);var s={CardsLoaded:[]},d=n(15),p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,f=Object(i.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CARDS":return Object(l.a)(Object(l.a)({},e),{},{CardsLoaded:t.payload});default:return e}}),p(Object(i.a)(d.a))),m=n(4),b=n(5),h=n(6),v=n(8),C=n(7),E=function(e){Object(v.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={nombre:"",arquetipo:!1},a.isCheck=a.isCheck.bind(Object(h.a)(a)),a}return Object(b.a)(n,[{key:"isCheck",value:function(e){e?this.setState({arquetipo:!0}):this.setState({arquetipo:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"lightblue"}},"Buscador"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.getCards(e.state.nombre,e.state.arquetipo)}},r.a.createElement("input",{type:"text",onChange:function(t){e.setState({nombre:t.target.value})}}),r.a.createElement("label",{style:{color:"lightblue"}},r.a.createElement("input",{type:"checkbox",id:"cbox1",onChange:function(t){e.isCheck(t.target.checked)}}),"Buscar por Arquetipo"),r.a.createElement("button",{type:"submit"},"Buscar")))}}]),n}(a.Component);var O=Object(u.b)(null,(function(e){return{getCards:function(t,n){return e(function(e,t){if(""!==e){var n="&fname";t&&(n="&archetype"),e="="+e}return console.log(n),function(t){return fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?format=duel links".concat(n).concat(e)).then((function(e){return e.json()})).then((function(e){t({type:"GET_CARDS",payload:e})}))}}(t,n))}}}))(E),k=n(16),_=n.n(k);var g=function(e){var t=e.Card;return r.a.createElement("div",{className:_.a.carta},r.a.createElement("img",{src:t.card_images[0].image_url,alt:""}))},j=n(17),y=n.n(j),S=function(e){Object(v.a)(n,e);var t=Object(C.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.Card.data;return void 0!==e&&r.a.createElement("div",{className:y.a.contenedorCarta},e.map((function(e){return r.a.createElement(g,{Card:e})})))}}]),n}(a.Component);var x=Object(u.b)((function(e){return{Card:e.CardsLoaded}}),null)(S);var q=function(){return r.a.createElement(u.a,{store:f},r.a.createElement(O,null),r.a.createElement(x,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6516a8f7.chunk.js.map