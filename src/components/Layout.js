import React, {Component} from 'react';
import NavbarComponent from './NavBarComponents'
import NavFooter from './Footer'

const Layout = (props) =>{
    return (
        <React.Fragment>
            <div>
            <NavbarComponent/>
            < NavFooter />
            {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout;