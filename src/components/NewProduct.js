import React from 'react';

import '../styles/NewProduct.css';
import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


export class NewProduct extends React.Component {

  render() {
    return (
        
      <div>
      <br /> <br />
      <h1 id="newProductHeader">New Product</h1>
       
        <div class="newProductForm">
            <div class="row">

                <div class="col-xl-6 form">
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