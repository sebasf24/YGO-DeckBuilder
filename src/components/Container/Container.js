import {connect} from 'react-redux';
import Card from '../Card/Card.jsx';
import React,{Component} from 'react'

class CardContainer extends Component{
    
    render(){
        const ygoCard = this.props.Card.data;
        //console.log(ygoCard);
       if(ygoCard === undefined){
        return(
            <div>
                <h1>...</h1>
            </div>
        )
       }else{
        return(
            <Card Card={ygoCard}></Card>
        )
       }
    }
}

function mapStateToProps(state){
    return{
        Card: state.CardsLoaded
    }
}

export default connect(mapStateToProps,null)(CardContainer)