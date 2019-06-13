import React , {Component} from 'react'
import '../estilos/Footerstyle.css'
import logo from '../estilos/imagenes/Facebook.png'
import logodos from '../estilos/imagenes/twitter.png'
import logotres from '../estilos/imagenes/Instagram.png'


class NavFooter extends Component{
    render (){
        return(
            <footer class="footer_1">
                <div class="container-fluid">
                    <div className="row-3">
                        <button type="submit" class="btn_btn-primary_mb-5" >
                        <img className="Footer__logo1" src={logo} alt="Logo" /></button>
                        <button type="submit" class="btn_btn-primary_mb-6" >
                        <img className="Footer__logo1" src={logodos} alt="Logodos" /></button>
                        <button type="submit" class="btn_btn-primary_mb-7">
                        <img className="Footer__logo3" src={logotres} alt="Logotres" /></button>
                    </div>
                </div>
            </footer>
        )
    }
}
export default NavFooter;