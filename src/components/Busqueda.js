import React , {Component} from 'react'
import '../estilos/navBarstyle.css'
import '../estilos/busquedaStyle.css'

class Busqueda extends Component{
    render (){
        return(
            <nav class="search">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="Buscar" placeholder="Buscar" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </nav>
        )
    }
}
export default Busqueda;
