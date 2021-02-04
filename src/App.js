import {Component} from 'react';
import './App.css';
import tasks from './ejemplos/task.json'//importamos array con informacion

//importacion de componentes
import Tasks from './components/Tasks'//importamos componente Tasks
import TaskForm from './components/TaskForm'//importamos componente Tasks

console.log(tasks);

class App extends Component{
  //aqui se definen los estados del componente app
  //tiene un estado llamado tareas (tasks) que tiene como valor el json que importamos
  state={
    tasks:tasks
  }
  render(){//renderiza un componente de tipo Task con una propiedad (props)
    //llamada tareas con un valor igual a las tareas que tenemos en el estado
    return <div>
      <TaskForm/>
      <Tasks tareas={this.state.tasks}/>
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
