import {connect} from 'react-redux';
import Card from '../Card/Card.jsx';
import React,{Component} from 'react'

class Container extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const data=this.props;
        return(
            <Card Card={data}></Card>
        )
    }
}

function mapStateToProps(state){
    return{
        Card: state.CardsLoaded
    }
}

export default connect(mapStateToProps,null)(Container)