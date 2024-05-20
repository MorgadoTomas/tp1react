import { Component } from 'react';
import './App.css';
import Contador from './componentes/Contador';
import Formulario from './componentes/Formulario';
//const contadores = ['Alumnos', 'Profesores', 'Materias', 'Aulas', 'ETC']


export default class App extends Component{
      constructor(props){
        super(props);
        this.state = {
          contadores: []
        }
      }

      guardar(nombre, valor){
        let nuevoscontadores = this.state.contadores;
        nuevoscontadores.push(nombre);
        this.setState({contadores: nuevoscontadores})
      }

      borrarcontador(index){
        let nuevoscontadores = this.state.contadores;
            nuevoscontadores.splice(index,1);
            this.setState({contadores: nuevoscontadores})
          }

  render (){
    return (
      <div className='Contenedor'>
        <Formulario
        guardar={(nombre, valor) => this.guardar(nombre, valor)}
        />
        
        <div className='ListaContadores'>
          { this.state.contadores.map((cont, index) =>             
              <Contador 
              key={index}
              borrarcontador= {()=> this.borrarcontador(index)} 
              > 
              {cont.nombre}
              </Contador>
          )}
        </div>
      </div>
    )
  }
}
