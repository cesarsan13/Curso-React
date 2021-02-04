import React,{Component} from 'react';
import Task from './Task';

class Tasks extends Component{
    render(){
        return this.props.tareas.map(task => <Task tareas={task} key={task.id}/>) 
    }
}

export default Tasks;