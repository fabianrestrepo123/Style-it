import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import '../estilos/mensajes.css'

class Mensajefinal extends Component{
    render(){
        return(
            <div class="cardtres">
                <h1 class="card-title">¡Gracias por su compra!.</h1>
                <h2 className="dias">Nos aseguraremos de que su pedido llegue en un plazo de xx dias. </ h2>
                <div class="card-body">
                    <Link class="btn btn-Confirmar btn-lg btn-block" to="/home">Confirmar</Link>
                </div>
            </div>    
        )
    }
}
export default Mensajefinal;