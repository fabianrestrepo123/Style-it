import React,{Component} from 'react'
import '../estilos/Cardpago.css'
import {Link} from 'react-router-dom'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

class CardPago extends Component{
    render(){
        return(
            <div class="carddos">
                <h2 class="card-title">Informacion de la compra</h2>
                <img class="card-img-top"  alt="Card image cap"/>
                <div class="card-body">
                    <Link class="btn btn-pagar" to="/pagos/confirmacion">Pagar</Link>
                </div>
            </div>
        )
    }
}
export default CardPago;