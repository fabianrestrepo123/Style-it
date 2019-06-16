import React , {Component} from 'react'
import '../estilos/Diseños.css'
import uno from '../estilos/imagenes/j.png'
import dos from '../estilos/imagenes/a.png'
import tres from '../estilos/imagenes/c.png'
import cuatro from '../estilos/imagenes/g.png'
import cinco from '../estilos/imagenes/i.png'
import {Link} from 'react-router-dom'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

class Diseños extends Component{
    render (){
        return(
            <div>
                <div class="container">
                <div>
                    <div className="diseños1">    
                        <img className="imagen" src={uno} height="350px"/>
                        <div className="descripcion">
                            <div className="descripcion2">
                                <h1>Diseño n°1</h1>
                                <div className="descripcion3">
                                    <h3>Tipo de diseño:  Extrovertido</h3>
                                    <h3>Valor por unidad:  40.000$</h3>
                                    <h3>Diseñador:  Carlos Morales</h3>
                                </div>
                            </div>
                            <Link className="btn btn-outline-success my-2 my-sm-0 my-sm-1" to="/Verdiseños/pagos">Comprar</Link>
                        </div>
                    </div>
                    <div className="diseños2"> 
                        <img className="imagen" src={dos} height="350px"/>
                        <div className="descripcion">
                            <div className="descripcion2">
                                <h1>Diseño n°2</h1>
                                <div className="descripcion3">
                                    <h3>Tipo de diseño:  Timido</h3>
                                    <h3>Valor por unidad:  65.500$</h3>
                                    <h3>Diseñador:  German Melo</h3>
                                </div>
                            </div>
                            <Link className="btn btn-outline-success my-2 my-sm-0 my-sm-1" to="/Verdiseños/pagos">Comprar</Link>
                        </div>
                    </div>        
                    <div className="diseños3">         
                        <img className="imagen" src={tres} height="350px"/>
                        <div className="descripcion">
                            <div className="descripcion2">
                                <h1>Diseño n°3</h1>
                                <div className="descripcion3">
                                    <h3>Tipo de diseño:  Introvertido</h3>
                                    <h3>Valor por unidad:  35.250$</h3>
                                    <h3>Diseñador:  Esteban Suarez</h3>
                                </div>
                            </div>
                            <Link className="btn btn-outline-success my-2 my-sm-0 my-sm-1"to="/Verdiseños/pagos">Comprar</Link>
                        </div>
                    </div>
                    <div className="diseños4">         
                        <img className="imagen" src={cuatro} height="350px"/>
                        <div className="descripcion">
                            <div className="descripcion2">
                                <h1>Diseño n°4</h1>
                                <div className="descripcion3">
                                    <h3>Tipo de diseño:  blanco</h3>
                                    <h3>Valor por unidad:  11.000$</h3>
                                    <h3>Diseñador:  Nicolas Corales</h3>
                                </div>
                            </div>
                            <Link className="btn btn-outline-success my-2 my-sm-0 my-sm-1" to="/Verdiseños/pagos">Comprar</Link>
                        </div>
                    </div>
                    <div className="diseños5">         
                        <img className="imagen" src={cinco} height="350px"/>
                        <div className="descripcion">
                            <div className="descripcion2">
                                <h1>Diseño n°5</h1>
                                <div className="descripcion3">
                                   <h3>Tipo de diseño:  Vacio</h3>
                                    <h3>Valor por unidad:  9.500$</h3>
                                    <h3>Diseñador:  Lucila Perez</h3> 
                                </div>
                            </div>
                            <Link className="btn btn-outline-success my-2 my-sm-0 my-sm-1"to="/Verdiseños/pagos">Comprar</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Diseños;
