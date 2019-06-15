import React,{Component} from 'react'
import Cartauno from '../components/Cartauno'
import { Link } from 'react-router-dom'
import RegistroInicio from './RegistroInicio'
import '../estilos/RegistroInicio.css'
import '../estilos/homeStyle.css'

class Welcome extends Component{
    render(){
        return(
            <div >
                < Cartauno/>
            </div>
        )
    }
}
export default Welcome;