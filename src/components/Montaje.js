import React , {Component} from 'react'
import '../estilos/Diseño.css'
import c from '../estilos/imagenes/ca.png'
import g from '../estilos/imagenes/go1.jpg'
import g1 from '../estilos/imagenes/go1.jpg'

class Montaje extends Component{
    render (){
        return(
            <div>
                <div className="camisetas">
                    <img className="camisa1" src={c}></img>
                </div>
                <div className="gorras">
                    <img className="gorra1" src={g}></img>
                </div>
                <div>
                    <img className="espacio" src={g1}></img>
                </div>
                <img className="montaje1" src={this.props.imagen}></img>
                <img className="montaje2" src={this.props.imagen2}></img>
            </div>
        )
    }
}

export default Montaje;