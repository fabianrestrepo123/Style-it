import React , {Component} from 'react'
import '../estilos/navBarstyle.css'
import logo from '../estilos/imagenes/Style-it.png'





class NavBarComponents extends Component{
    render (){
        return(
            <div className="Navbar">  
                <div className ="container-fluid" >
                    <div>
                        <div className="col-7">
                            <a className="NavBar__brand" href="/home">
                            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
              
        )
    }
}
export default NavBarComponents;