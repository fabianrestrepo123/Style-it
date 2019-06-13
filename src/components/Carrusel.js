import React , {Component} from 'react'
import '../estilos/carrusel.css'
import uno from '../estilos/imagenes/a.png'
import dos from '../estilos/imagenes/j.png'
import tres from '../estilos/imagenes/c.png'
import cuatro from '../estilos/imagenes/d.jpg'
import cinco from '../estilos/imagenes/e.jpg'
import seis from '../estilos/imagenes/k.jpg'
import siete from '../estilos/imagenes/g.png'
import ocho from '../estilos/imagenes/h.jpg'
import nueve from '../estilos/imagenes/i.png'
import diez from '../estilos/imagenes/j.png'
import once from '../estilos/imagenes/k.jpg'
import doce from '../estilos/imagenes/l.png'

class Carrusel extends React.Component{
    render(){
        return(
            <div >
                <div className="carrusel">
                <div className="Carousel__Style">
                <div class="carousel slide" data-ride="carousel" id="carousel-example-generic">
                <div class="carousel-inner">
                    <div class="item active" data-interval="1000">
                        <img src={uno} class="img-responsive"/>
                    </div>
                    <div class="item" data-interval="1000">
                    <img src={dos} class="img-responsive" />
                    </div>
                    <div class="item" data-interval="1000">
                    <img src={tres} class="img-responsive" />
                    </div>
                    <div class="item" data-interval="1000">
                    <img src={cuatro} class="img-responsive" />
                    </div>
                </div>
                <a class="carousel-controlleft" href="#carousel-example-generic" data-slide="prev">
                    <span class="icon-prev"></span>
                </a>
                <a class="carousel-controlright" href="#carousel-example-generic" data-slide="next">
                    <span class="icon-next"></span>
                </a>
                </div>
            </div>
                </div>
            <div className="carrusel-2">
                <div className="Carousel__Style">
                <div class="carousel slide" data-ride="carousel" id="carousel-example-generic">
                <div class="carousel-inner">
                    <div class="item active" data-interval="1000">
                        <img src={siete} class="img-responsive"/>
                    </div>
                    <div class="item" data-interval="1000">
                    <img src={ocho} class="img-responsive" />
                    </div>
                    <div class="item" data-interval="1000">
                    <img src={nueve} class="img-responsive" />
                    </div>
                    <div class="item" data-interval="1000">
                    <img src={diez} class="img-responsive" />
                    </div>
                </div>
                <a class="carousel-controlleft" href="#carousel-example-generic" data-slide="prev">
                    <span class="icon-prev"></span>
                </a>
                <a class="carousel-controlright" href="#carousel-example-generic" data-slide="next">
                    <span class="icon-next"></span>
                </a>
                </div>
                </div>
            </div>
            <div className="carrusel-3">
                <div className="Carousel__Style">
                <div class="carousel slide" data-ride="carousel" id="carousel-example-generic">
                <div class="carousel-inner">
                <div class="item active" data-interval="1000">
                    <img src={cinco} class="img-responsive"/>
                    </div>
                    <div class="item" data-interval="1000">
                    <img src={seis} class="img-responsive" />
                    </div>
                    <div class="item" data-interval="1000">
                    <img src={once} class="img-responsive" />
                    </div>
                    <div class="item" data-interval="1000">
                    <img src={doce} class="img-responsive" />
                    </div>
                    </div>
                <a class="carousel-controlleft" href="#carousel-example-generic" data-slide="prev">
                    <span class="icon-prev"></span>
                </a>
                <a class="carousel-controlright" href="#carousel-example-generic" data-slide="next">
                    <span class="icon-next"></span>
                </a>
                </div>
                </div>
            </div>
            </div> 
        )
    }
}

export default Carrusel;
