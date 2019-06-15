import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../estilos/homeStyle.css'
import  Botones from '../components/Botones'


function Home(){
    return(
        <div className="col-6">
            <Botones/>
        </div>
    )
}

export default Home;
