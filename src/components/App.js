import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import slikice from '../photos/slikice.jpg';

import { Nav } from './Nav';
import { Products } from './Products';
import { Expenses } from './Expenses';
import { NewProduct } from './NewProduct';
import { Login } from './Login';
import { Register } from './Register';
import { EditProduct } from './EditProduct';


export class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/newproduct" component={NewProduct} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/editproduct" component={EditProduct} />
        </div>
      </Router>  
    )
  }
}
