import { Component } from 'react'
import './App.css'
import Contador from './componentes/Contador'

export default class App extends Component
{
  render (){
    return (
      <div className='ListaContadores'>
        <Contador>Alumnos </Contador>
        <Contador> profesor </Contador>
        <Contador> </Contador>
        <Contador> </Contador>
      </div>
    )
  }
}
