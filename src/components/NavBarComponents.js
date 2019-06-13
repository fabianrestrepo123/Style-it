import React , {Component} from 'react'
import '../estilos/navBarstyle.css'
import logo from '../estilos/imagenes/Style-it.png'
import Busqueda from './Busqueda'
import {Link} from 'react-router-dom'





class NavBarComponents extends Component{
    render (){
        return(
            <div className="Navbar">  
                <div className ="container-fluid" >
                    <div>
                        <div className="col-6">
                            <Link className="NavBar__brand" to="/">
                                <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                            </Link>
                            < Busqueda />
                        </div>
                    </div>
                </div>
            </div>
              
        )
    }
}
export default NavBarComponents;