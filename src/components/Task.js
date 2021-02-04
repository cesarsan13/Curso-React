import React,{Component} from 'react';
import PropTypes from 'prop-types';//biblioteca que ayuda para definir que tipo de objecto quiero que me pasen

class Task extends Component{
   //una funcion tal caual que retorna un estilo escrito en JavaScript
    styleCompleted(){
        return{
            fontSize:'20px',
            //si el elemento done de la propiedad tareas 
            //de este componente es true retorna rojo si es false retorna negro
            color:this.props.tareas.done ?'red' : 'black',
            //si el elemento done de la propiedad tareas 
            //de este componente es true retorna texto tachado si es false retorna nada
            textDecoration: this.props.tareas.done ? 'line-through' : 'none'
        }
    }
    render(){
        //declaramos la variable constante tareas que a su vez 
        //es el elemento de this.props 
    const {tareas} = this.props;
    //retorna un div con el estilo que retorna la vfuncion stylecompleted
    //contiene el elemento titulo descripcion done de la prop tareas

        return   <div style={this.styleCompleted()}>
        {tareas.titulo}-
        {tareas.descripcion}-
        {tareas.done}
            <input type="checkbox"/>
            <button style={btn_delete}>x</button>
        </div>
    }
}

//definimos el tipo de propiedad que requiere mi componente
Task.propTypes={
    tareas:PropTypes.object.isRequired
}
//se puede dar estilo a un elemento con javascript
const btn_delete ={
    fontSize:'20px',
    background:'#ea2027',
    color:'#fff',
    border: 'none',
    pading: '10px 15px', //10px arriba y abajo y 15px a los lados
    borderRadius: '50%',
    cursor:'pointer'
}   
export default Task;