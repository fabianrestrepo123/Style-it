import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../estilos/RegistroInicio.css'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

class Inicio extends Component{
    render(){
        return(
            <div class="card inicio">
                <div class="card-body">
                <h1 class="letrero2">Iniciar Sesión</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group7">
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="Email" 
                            name="Email"
                            placeholder="Email"  
                        />
                    </div>
                    <div className="form-group8">
                        <input 
                            className="form-control" 
                            type="Password" 
                            name="Password"
                            placeholder="Password"
                        />
                    </div>
                    <div> 
                    < Link  class="btn btn-primary2"to="Registroinicio/home">Iniciar Sesión
                    </Link>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
export default Inicio;