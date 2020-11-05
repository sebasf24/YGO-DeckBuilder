import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getCards} from '../../actions';

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            nombre: "",
            arquetipo: false
        };
        /* this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this); */
        this.isCheck=this.isCheck.bind(this);

    }

    /* handleChange(event) {
        this.setState({ nombre: event.target.value });
      }
    handleSubmit(event) {
        event.preventDefault();
        this.props.getCards(this.state.title);
    } */
    
    isCheck(value){
        if(value){
            this.setState({arquetipo: true});
        }else{
            this.setState({arquetipo: false})
        }
    }

    render(){
        return(
            <div>
                <h1 style={{color: "lightblue" }}>Buscador</h1>
                <form onSubmit={e =>{e.preventDefault();
                //{console.log(this.state.arquetipo)}
                     this.props.getCards(this.state.nombre,this.state.arquetipo)}}>
                    <input type="text" onChange={e =>{ this.setState({nombre: e.target.value})} }></input>
                    <label style={{color: "lightblue" }}><input type="checkbox" id="cbox1" onChange={e =>{this.isCheck(e.target.checked)}}/>Buscar por Arquetipo</label>
                    <button type="submit">Buscar</button>
                </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return{
        getCards: (card,archetype) => dispatch(getCards(card,archetype))
    }
}

export default connect(null,mapDispatchToProps)(Search);