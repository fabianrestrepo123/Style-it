import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import NotFound404 from './components/NotFound404';
import Welcome from '../src/pages/Welcome';
import Home from '../src/pages/Home';
import RegistroInicio from './pages/RegistroInicio';
import Pagos from '../src/pages/Pagos';
import VerDiseños from '../src/pages/VerDiseños';
import Diseñar from '../src/pages/Diseñar';
import Confirmacion from'../src/pages/Confirmacion'
import Mensaje from '../src/pages/Mensaje'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/Registroinicio" component={RegistroInicio}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/Registroinicio/home" component={Home}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/home" component={Home}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/home/diseñar/" component={Diseñar}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/Registroinicio/home/diseñar" component={Diseñar}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/diseñar/pagos" component={Pagos}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/Registroinicio/home/Verdiseños" component={VerDiseños}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/home/Verdiseños" component={VerDiseños}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/Verdiseños/pagos" component={Pagos}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/pagos/confirmacion" component={Confirmacion}/>
        <Route path='/' exact={true} component={NotFound404} />
        <Route exact path="/confirmacion/mensaje" component={Mensaje}/>
        <Route path='/' exact={true} component={NotFound404} />
        
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
