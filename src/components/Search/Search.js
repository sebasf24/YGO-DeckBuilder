import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getCards} from '../../actions';

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            nombre: ""
        };
        /* this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this); */

    }

    /* handleChange(event) {
        this.setState({ nombre: event.target.value });
      }
    handleSubmit(event) {
        event.preventDefault();
        this.props.getCards(this.state.title);
    } */

    render(){
        return(
            <div>
                <h1>Buscador</h1>
                <form onSubmit={e =>{e.preventDefault();
                     this.props.getCards(this.state.nombre)}}>
                    <input type="text" onChange={e =>{ this.setState({nombre: e.target.value})} }></input>
                    <button type="submit">Buscar</button>
                </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return{
        getCards: card => dispatch(getCards(card))
    }
}

export default connect(null,mapDispatchToProps)(Search);