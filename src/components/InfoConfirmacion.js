import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../estilos/confirmacion.css'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

class InfoConfirmacion extends Component{
    render(){
        return(
            <div>
                <div class="card info">
                <div class="card-body">
                <h1 class="letrero1">Enviar a:</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group10">
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="Nombre" 
                            name="Nombre"
                            placeholder="Nombre"  
                        />
                    </div>
                    <div className="form-group11">
                        <input 
                            className="form-control" 
                            type="Direccion" 
                            name="Direccion"
                            placeholder="Direccion"
                        />
                    </div>
                    <div className="form-group12">
                        <input 
                            className="form-control" 
                            type="Observaciones" 
                            name="Orservaciones"
                            placeholder="Observaciones"
                        />
                    </div>
                    <div className="form-group13">
                        <input 
                            className="form-control" 
                            type="Ciudad" 
                            name="Ciudad"
                            placeholder="Ciudad"
                        />
                    </div>
                    <div className="form-group14">
                        <input 
                            className="form-control" 
                            type="Departamento" 
                            name="Departamento"
                            placeholder="Departamento"
                        />
                    </div>
                    <div className="form-group15">
                        <input 
                            className="form-control" 
                            type="Pais" 
                            name="Pais"
                            placeholder="Pais"
                        />
                    </div>
                    <div>
                        <Link class="btn btn-primary3" to="/confirmacion/mensaje">Confirmar</Link>
                    </div>
                </form>
                </div>
                </div>
            </div>
        )
    }
}
export default InfoConfirmacion;