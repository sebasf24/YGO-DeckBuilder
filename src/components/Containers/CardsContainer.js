import {connect} from 'react-redux';
import Card from '../Card/Card.jsx';
import React,{Component} from 'react'
import Style from "./CardsContainer.module.css"

class CardsContainer extends Component{
    
    render(){
        const ygoCards = this.props.Card.data;
        return(
            (ygoCards !== undefined) && (
            <div className={Style.contenedorCarta}>
                {ygoCards.map(ygoCard => 
                    <Card Card={ygoCard}></Card>
                )}
            </div>
                )
        )
       
    }
}

function mapStateToProps(state){
    return{
        Card: state.CardsLoaded
    }
}

export default connect(mapStateToProps,null)(CardsContainer)