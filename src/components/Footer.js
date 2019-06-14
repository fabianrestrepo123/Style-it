import React , {Component} from 'react'
import '../estilos/Footerstyle.css'
import logo from '../estilos/imagenes/Facebook.png'
import logodos from '../estilos/imagenes/twitter.png'
import logotres from '../estilos/imagenes/Instagram.png'
import {Link} from 'react-router-dom'


class NavFooter extends Component{
    state={}

    handleClick = e => {
        console.log("Han presionado el boton")
    };

    render (){
        return(
            <footer class="footer_1">
                <div class="container-fluid">
                    <div className="row-3">
                        <a href="https://www.facebook.com/?ref=tn_tnmn"  class="btn-btn-success1" >
                        <img className="Footer__logo1" src={logo} alt="Logo" /></a>
                        <a href="https://twitter.com/?lang=es" class="btn-btn-success2" >
                        <img className="Footer__logo2" src={logodos} alt="Logo" /></a>
                        <a href="https://www.instagram.com/?hl=es-la" class="btn-btn-success3" >
                        <img className="Footer__logo3" src={logotres} alt="Logo" /></a>
                    </div>
                </div>
            </footer>
        )
    }
}
export default NavFooter;