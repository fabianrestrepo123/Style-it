import React,{Component} from 'react'
import '../estilos/confirmacion.css'
import preview from '../estilos/imagenes/i.png'

class Preview extends Component{
    render(){
        return(
            <div class="card preview">
                <div class="card-body">
                    <h1 class="letrero2">Preview</h1>
                    <img className="vista-preview" src={preview} alt="preview"></img>
                </div>
            </div>
        )
    }
}
export default Preview;