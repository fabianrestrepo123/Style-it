import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Diseñar from '../estilos/imagenes/Diseñar.png'
import Diseño from '../estilos/imagenes/diseño.png'
import '../estilos/Botones.css'


class Botones extends  Component{
    render(){
        return(    
            <div className="contenedor-botones">   
                <button type="button" class="btn btn-diseñar">
                <img className="diseñar" src={Diseñar} alt="Logo" /></button>
                <button type="button" class="btn btn-diseño">
                <img className="diseño" src={Diseño} alt="Logo" /></button>
            </div> 
        )
    }
}
export default Botones;