import React, {Component} from 'react';

//declarando asi la clase la estamos exportando al mismo tiempo
export default class TaskForm extends Component{
   //declaracion de estado0
    state={
        titulo:'',
        descripcion:''
    }
    //funciones que se disparan en los eventos
    onSubmit = evt => {
        evt.preventDefault();
        console.log(this.state);
        
    }
    onChange = evt =>{
        this.setState({
            //se pone entre corchetes para que se pueda interpretar
            //el valor de evt.target.name que retorna el name 
            //del input que ejecuta la funcion
            [evt.target.name]: evt.target.value           
        });
    }
    render(){
        return(
            //onsubmit onchange son eventos de los input
            //como vlaor tiene la funcion declarada arriba
            //propiedad value tiene como valor el estado 
            //cada que precione una tecla va a la funcion on change
            //en donde le cambia el valor al estado
            //y este se lo pone al input con 
            //[evt.target.name] : evt.target.value
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange} 
                value={this.state.titulo} 
                name='titulo'
                type="text" 
                placeholder="escribe una tarea"
                />
                <br />
                <br />
                <textarea onChange={this.onChange} 
                name='descripcion'
                value={this.state.descripcion} 
                placeholder="Describe la descripcion de la tarea">
                </textarea>
                <input type="submit"/>
            </form>
        )
    }

}

