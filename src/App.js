import {Component} from 'react';
import './App.css';
import tasks from './ejemplos/task.json'//importamos array con informacion
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//importacion de componentes
import Tasks from './components/Tasks'//importamos componente Tasks
import TaskForm from './components/TaskForm'//importamos componente Tasks
import Posts from './components/Posts'

console.log(tasks);
//en el componente app tenemos la propiedad que guerda las tareas
//por lo tanto aqui es donde guardaremos nuestras nuevaas tareas
//conectando el form en donde tengo los datos (TaskForm)
//con el archivo App.js mediante una funcion
class App extends Component{
  //aqui se definen los estados del componente app
  //tiene un estado llamado tareas (tasks) que tiene como valor el json que importamos
  state={
    tasks:tasks
  }
  deleteTask = (id) => {
    //el metodo filter permite devolver un nuevo arreglo
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks:newTask})
  }
  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done//con el parentesis cambia a su valor opuesto
      }
      return task;
    })
    this.setState({tasks:newTasks});
  }

  addTask = (titulo, descripcion) => {
    const newtask = {
      titulo:titulo,
      descripcion:descripcion,
      id: this.state.tasks.length
    }
    //despues de obtener y guardar la nueva tarea en una newtask
    //se altera el estado diciendo
    //toma todo lo que ya tenia en el estado de tareas y voy a agregarle algo nuevo
    //en pocas palabras agrego un nuevo elemento al arreglo
    this.setState({
      tasks: [...this.state.tasks,newtask]
    })
    console.log(newtask);
  }
 
  render(){//renderiza un componente de tipo Task con una propiedad (props)
    //llamada tareas con un valor igual a las tareas que tenemos en el estado

    return <div>
      <Router>
      <Link to="/">Inicio</Link>
      <br/>
      <Link to="/Posts">Publicaciones</Link>
      
      <Route exact path="/" render={ () => {
       return <div>
          <TaskForm addTask={this.addTask} />
          <Tasks 
            tareas={this.state.tasks} 
            deleteTask={this.deleteTask} 
            checkDone ={this.checkDone}
          />
        </div>
        
      }}>

      </Route>
      <Route exact path="/Posts" component={Posts}/>

      </Router>
     
     
    </div>
  }
}
// function Helloword(props){
//     return(
//       <div id="hello" >
//         <h3 id="subtitle">{props.subtitulo}</h3>
//         {props.mensaje}</div>
//     )
// }
// class Helloword extends React.Component{
//   state={
//     show:true

//   } 
//   toggleshow=()=>{
//     this.setState({show:!this.state.show})
//   }
//   render(){
//     if (this.state.show){
//       return (
//         <div id="hello" >
//         <h3 id="subtitle">{this.props.subtitulo}</h3>
//         {this.props.mensaje}
//         <button onClick={this.toggleshow}>cambiar estado</button>
//         </div>
//       )
//     }else{
//       return <h1>no hay elemtnos 
//         <button onClick={this.toggleshow}>
//           cambiar estado
//         </button>
//          </h1>
//     }
//     }
   
// }
// function App() {
//   return (
//     <div>
//       this is my component: 
//       <Helloword mensaje="hola" subtitulo="Lorem Ipsum Dolor"/>
//       <Helloword mensaje="a" subtitulo="otro subtitulo"/>
//       <Helloword mensaje="todos"subtitulo="otro y otro"/>
//     </div>
//   );
// }
export default App;
