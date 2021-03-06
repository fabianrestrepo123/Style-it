import React, {Component} from 'react';
import NavbarComponent from './NavBarComponents'
import NavFooter from './Footer'
import Carrusel from './Carrusel'

const Layout = (props) =>{
    return (
        <React.Fragment>
            <NavbarComponent/>
            {props.children}
            <NavFooter />
        </React.Fragment>
    )
}

export default Layout;