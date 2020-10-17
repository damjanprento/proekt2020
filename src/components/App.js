import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import slikice from '../photos/slikice.jpg';

import { Nav } from './Nav';
import { Products } from './Products';
import { Expenses } from './Expenses';


export class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/expenses" component={Expenses} />
          <Route path="/products" component={Products} />
        </div>
      </Router>  
    )
  }
}
