import { Component } from 'react';
import './App.css';
import Contador from './componentes/Contador';
import Formulario from './componentes/Formulario';
const contadores = ['Alumnos', 'Profesores', 'Materias', 'Aulas', 'ETC']

export default class App extends Component{
      constructor(props){
        super(props);
        this.state = {
          contadores: []
        }
      }

      guardar(nombre){
        let nuevoscontadores = this.state.contadores;
        nuevoscontadores.push(nombre);
        this.setState({contadores: nuevoscontadores})
      }
  render (){
    return (
      <div className='Contenedor'>
        <Formulario
        guardar={(nombre) => this.guardar(nombre)}
        />
        <div className='ListaContadores'>
          { this.state}


        </div>
      </div>
    )
  }
}
