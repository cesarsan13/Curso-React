import React,{Component} from 'react';

class Task extends Component{
    styleCompleted(){
        return{
            fontSize:'20px',
            color:this.props.tareas.done ?'red' : 'black',
            textDecoration:'none'
        }
    }
    render(){
    const {tareas} = this.props;



        return   <div style={this.styleCompleted()}>
        {tareas.titulo}-
        {tareas.descripcion}-
        {tareas.done}
            <input type="checkbox"/>
            <input type="email"/>
            <button style={btn_delete}>x</button>
        </div>
        //quiero subir estis cambios 
        // nad amas estos
        
        
    }
}
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