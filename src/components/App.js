import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import { Nav } from './Nav';
import { Products } from './Products';
import { Expenses } from './Expenses';
import { NewProduct } from './NewProduct';
import { Login } from './Login';
import { Register } from './Register';
import { EditProduct } from './EditProduct';


export class App extends React.Component {
  render(){
    
    // console.log('State', this.state);

    return (
      <div id="main">
      <Router>
        {/* <Nav /> */}
        <Route path="/expenses" component={Expenses} />
        <Route path="/products" component={Products} />
        <Route path="/newproduct" component={NewProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/editproduct" component={EditProduct} />
        <Route path="/editproduct/:id" component={EditProduct} />
      </Router>  
      </div>
      
    )
  }
}
