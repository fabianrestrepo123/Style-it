import React , {Component} from 'react'
import '../estilos/Diseño.css'
import Montaje from '../components/Montaje'
import {Link} from 'react-router-dom'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

class Diseño extends Component{
    state={};

    render (){
        return(
            <div>
                <div className="vista">
                    <h1 className="letrero1">CAMISETAS</h1>
                    <div className="vista1">
                        <h3>Links Predeterminados de diseños</h3>
                        <h6>1. https://cdn.pixabay.com/photo/2017/11/15/20/40/tribal-2952490_960_720.png</h6>
                        <h6>2. https://cdn.pixabay.com/photo/2016/11/19/00/29/tribal-1837456_960_720.png</h6>
                        <h6>3. https://cdn.pixabay.com/photo/2015/09/20/12/58/turtle-948263_960_720.png</h6>
                        <h6>4. https://cdn.pixabay.com/photo/2016/03/29/21/11/tribal-1289375_960_720.png</h6>
                        <h6>5. https://i.pinimg.com/originals/de/19/c1/de19c15961ec35adcf8b8453b98ab631.png</h6>
                    </div>
                    <div className="vista2">
                    <h4>Ingresa el Link del diseño</h4>
                        <div class="file-upload-wrapper">
                            <input 
                                onChange={this.props.onChange}
                                type="text"
                                name="imagen" 
                                id="input-file-now" 
                                class="file-control"
                                value={this.props.formValues.imagen}
                            />
                        </div> 
                        <h6>¿No te gustaron? Ingresa otros diseños.</h6>
                    </div>
                    <Link class="btn btn-outline-success my-2 my-sm-0 boton1" to="/diseñar/pagos">Realizar Compra</Link>
                </div>
                <div className="vista3">
                    <h1 className="letrero1">GORRAS</h1>
                    <div className="vista1">
                        <h3>Links Predeterminados de diseños</h3>
                        <h6>1. https://www.stickpng.com/assets/images/580b585b2edbce24c47b24b5.png</h6>
                        <h6>2. https://cdn.pixabay.com/photo/2016/11/19/00/29/tribal-1837456_960_720.png</h6>
                        <h6>3. https://cdn.pixabay.com/photo/2015/09/20/12/58/turtle-948263_960_720.png</h6>
                        <h6>4. https://cdn.pixabay.com/photo/2013/07/12/15/04/star-149352_960_720.png</h6>
                        <h6>5. https://i.pinimg.com/originals/e3/45/6f/e3456f87a922620dfef19a74ab95a56e.png</h6>
                    </div>
                    <div className="vista2">
                    <h4>Ingresa el Link del diseño</h4>
                        <div class="file-upload-wrapper">
                            <input 
                                onChange={this.props.onChange}
                                type="text"
                                name="imagen2" 
                                id="input-file-now" 
                                class="file-control"
                                value={this.props.formValues.imagen2}
                            />
                        </div> 
                        <h6>¿No te gustaron? Ingresa otros diseños.</h6>
                    </div>
                    <Link class="btn btn-outline-success my-2 my-sm-0 boton1" to="/diseñar/pagos">Realizar Compra</Link>
                </div>
            </div>
        )
    }
}

export default Diseño;