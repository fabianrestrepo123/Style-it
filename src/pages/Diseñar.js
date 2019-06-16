import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Diseño from '../components/Diseño'
import Montaje from '../components/Montaje'

class Diseñar  extends Component{
    state = {form: {
        imagen:'',
        imagen2:''
    }};

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    }
    render(){
        return(
            <div>
                <Montaje
                    imagen={this.state.form.imagen}
                    imagen2={this.state.form.imagen2}
                />
                <Diseño
                    onChange={this.handleChange}
                    formValues={this.state.form} 
                />
            </div>
        )
    }
}

export default Diseñar;