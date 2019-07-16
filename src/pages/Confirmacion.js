import React,{Component} from 'react'
import '../estilos/confirmacion.css'
import InfoConfirmacion from '../components/InfoConfirmacion'
import Preview from '../components/Preview'

class Confirmacion extends Component{
    render(){
        return(
            <div className="container preview-envio">
                <div>
                    <InfoConfirmacion/>
                </div>
                <div>
                    <Preview/>
                </div>
            </div>
        )
    }
}
export default Confirmacion;