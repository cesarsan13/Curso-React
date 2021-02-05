import React,{Component} from 'react';
import Task from './Task';//importamos componente task 
import PropTypes from 'prop-types';//importamos proptypes para definir el 
//tipo de propiedad que sera pasada por cada componente


class Tasks extends Component{
    render(){
        //recorre el arreglo de tareas con la funcion map 
        //y por cada iteracion retorna un componente Task
        //con una prop tareas con valor del row del array
        //y el key necesario para que react dibuje los componentes
        return this.props.tareas.map(task =>
            <Task
                tareas={task} 
                key={task.id}
                deleteTask={this.props.deleteTask}
                checkDone={this.props.checkDone}
            />
        ) 
    }
}
//tipo de propiedad que requiere el componente 
//en este caso la propiedad tareas sera de tipo arrar y es requerida
Tasks.propTypes ={
    tareas:PropTypes.array.isRequired
    
}
export default Tasks;