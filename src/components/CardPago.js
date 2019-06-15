import React,{Component} from 'react'
import '../estilos/Cardpago.css'

class CardPago extends Component{
    render(){
        return(
            <div class="carddos">
                    <h2 class="card-title">Informacion de la compra</h2>
                    <img class="card-img-top"  alt="Card image cap"/>
                    <div class="card-body">
                        <a href="#" class="btn btn-pagar">Pagar</a>
                     </div>
                </div>
        )
    }
}
export default CardPago;