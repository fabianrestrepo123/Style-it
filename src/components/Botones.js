import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Diseñar from '../estilos/imagenes/Diseñar.png'
import Diseño from '../estilos/imagenes/diseño.png'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import '../estilos/Botones.css'


class Botones extends  Component{
    render(){
        return(    
            <div className="contenedor-botones">   
                <Link class="btn btn-diseñar" to="home/diseñar">
                <img className="diseñar" src={Diseñar} alt="Logo" /></Link>
                <Link class="btn btn-diseño" to="home/Verdiseños">
                <img className="diseño" src={Diseño} alt="Logo" /></Link>
            </div> 
        )
    }
}
export default Botones;