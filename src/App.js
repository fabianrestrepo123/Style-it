import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import NotFound404 from './components/NotFound404'
import Welcome from '../src/pages/Welcome'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path='*' exact={true} component={NotFound404} />
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
