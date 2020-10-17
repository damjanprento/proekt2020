import React from 'react';
import { BrowserRouter, Route, Switch, NavLink , Link } from "react-router-dom";

import '../styles/NewProduct.css';
import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import slikice from '../photos/slikice.jpg';

import { Products } from './Products';
import { Expenses } from './Expenses';


export class EditProduct extends React.Component {

  render() {
    return (
        
      <div>
      <br /> <br />
      <h1 id="newProductHeader">Edit Product</h1>
       
        <div class="newProductForm">
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

                    <button class="addproductbtn">Update Product</button>
                </div>
                <div class="col-xl-6 add">
                    <div class="centriraj"> 
                        
                        <FontAwesomeIcon id="krugce" icon={faPlusCircle}></FontAwesomeIcon> <br />
                        
                        <i>You are editing an existing product</i>
                        
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}