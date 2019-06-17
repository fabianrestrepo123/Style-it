import React,{Component} from 'react'
import '../estilos/Cardpago.css'
import {Link} from 'react-router-dom'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import tarjeta from '../estilos/imagenes/tarjeta.png'

class CardPago extends Component{
    render(){
        return(
            <div class="carddos">
                <h2 class="card-title">Informacion de la compra</h2>
                <img class="card-img-top" src={tarjeta} alt="Card image cap"/>
                <h4 className="valorcompra">Valor por Prenda: $$$</h4>
                <h4 className="valorcompra2">Total a Pagar: $$$</h4>
                <form>
                    <div className="form-groupnueve">
                        <input 
                            className="form-control" 
                            type="Cantidad" 
                            name="Cantidad"
                            placeholder="Cantidad 1,2,3..."  
                        />
                    </div>
                </form>
                <form>
                    <div className="form-groupuno">
                        <input 
                            className="form-control" 
                            type="N° de Targeta" 
                            name="N° de Targeta"
                            placeholder="N° de Targeta"  
                        />
                    </div>
                    <div className="form-groupdos">
                        <input 
                            className="form-control" 
                            type="Caducidad" 
                            name="Caducidad"
                            placeholder="Caducidad"
                        />
                    </div>
                    <div className="form-grouptres">
                        <input
                            className="form-control" 
                            type="Codigo de Seguridad" 
                            name="Codigo de Seguridad"
                            placeholder="Codigo de Seguridad"
                        />
                    </div>
                    <div className="form-groupcuatro">
                        <input 
                            className="form-control" 
                            type="Titular de la Targeta" 
                            name="Titular de la Targeta"
                            placeholder="Titular de la Targeta"  
                        />
                    </div>
                    <div className="form-groupcinco">
                        <input 
                            className="form-control" 
                            type="Direccion" 
                            name="Direccion"
                            placeholder="Direccion"  
                        />
                    </div>
                    <div className="form-groupseis">
                        <input 
                            className="form-control" 
                            type="Ciudad" 
                            name="Ciudad"
                            placeholder="Ciudad"  
                        />
                    </div>
                    <div className="form-groupsiete">
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="Provincia" 
                            name="Provincia"
                            placeholder="Provincia"  
                        />
                    </div>
                    <div className="form-groupocho">
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="Codigo Postal" 
                            name="Codigo Postal"
                            placeholder="Codigo Postal"  
                        />
                    </div>
                </form>
                <div class="card-body">
                    <Link class="btn btn-pagar" to="/pagos/confirmacion">Pagar</Link>
                </div>
            </div>
        )
    }
}

export default CardPago;