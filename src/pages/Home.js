import React, {Component} from 'react'

import '../estilos/homeStyle.css'

import h from '../estilos/imagenes/h.jpg'
import g from '../estilos/imagenes/g.png'

function Home(){
    return(
        <div className="Home">
            <div className="container">
                    <div className="diseño">
                        <img className="h" src={h} alt="ver-diseño" />  
                        <button type="submit" class="btn btn-outline-success my-2 mb-8">Ver Diseño</button>
                    </div>
                    <div className="diseñar">
                        <img className="g" src={g} alt="diseñar" />
                        <button type="submit" class="btn btn-outline-success my-2 mb-9">Diseñar</button>
                    </div>
            </div>
        </div>
    )
}

export default Home;
