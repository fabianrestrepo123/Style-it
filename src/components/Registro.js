import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../estilos/RegistroInicio.css'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

class Registro extends Component{
    render(){
        return(
            <div class="card registro">
                <div class="card-body">
                <h1 class="letrero2">Registro</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group1">
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="Nombres" 
                            name="Nombres"
                            placeholder="Nombres"  
                        />
                    </div>
                    <div className="form-group2">
                        <input 
                            className="form-control" 
                            type="Apellidos" 
                            name="Apellidos"
                            placeholder="Apellidos"
                        />
                    </div>
                    <div className="form-group3">
                        <input
                            className="form-control" 
                            type="Email" 
                            name="Email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group4">
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="Telefono" 
                            name="Telefono"
                            placeholder="Telefono"  
                        />
                    </div>
                    <div className="form-group5">
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="Password" 
                            name="Password"
                            placeholder="Password"  
                        />
                    </div>
                    <div className="form-group6">
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="Confirm Password" 
                            name="Confirm Password"
                            placeholder="Confirm Password"  
                        />
                    </div>
                    <div> 
                    <Link class="btn btn-primary3" to="Registroinicio/home">Registrar</Link>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
export default Registro;