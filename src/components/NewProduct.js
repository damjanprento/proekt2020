import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import '../styles/NewProduct.css';
import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import slikice from '../photos/slikice.jpg';

import { Products } from './Products';
import { Expenses } from './Expenses';


export class NewProduct extends React.Component {

  render() {
    return (
        
      <div id="app">
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            

            <button id="products">
                Products 
            </button>
            
            <button id="expenses">Expenses</button>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            
            
            <div class="collapse navbar-collapse" id="navbar-list-4">
              
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={slikice} width="40" height="40" class="rounded-circle" />
              </a>
              
            </div>

            
        </nav><br />

        
        <h1 id="newProductHeader">New Product</h1>
       

        <div class="container">
            <div class="row">

                <div class="col-xl-6">
                    <label>Product Name</label> <br />
                    <input type="text" id="productName"/> <br />
                    <label>Product Description</label> <br />
                    <input type="text" id="productDesc"/> <br />
                    <label>Product Type</label> <br />
                    <input type="text" id="productType"/> <br />
                    <label>Purchase Date</label> <br />
                    <input type="date" id="purchaseDate"/> <br />
                    <label>Product Price</label> <br />
                    <input type="text" id="productPrice"/> <br />

                    <button class="addproductbtn">Create Product</button>
                </div>
                <div class="col-xl-6 add">
                    <div class="centriraj"> 
                        
                        <FontAwesomeIcon id="krugce" icon={faPlusCircle}></FontAwesomeIcon> <br />
                        
                        <i>You are creating a new product</i>
                        
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}