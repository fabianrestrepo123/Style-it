import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Inicio from '../components/Inicio'
import Registro from '../components/Registro'
import '../estilos/RegistroInicio.css'
import '../estilos/Botones.css'

class RegistroInicio extends Component{
    render(){
        return(
            <div className="container registroinicio ">
                    <div>
                        <Inicio/>
                    </div>
                    <div>
                        <Registro/>
                    </div>
            </div>
        )
    }
}
export default RegistroInicio;