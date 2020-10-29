import React from 'react';

import '../styles/NewProduct.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav } from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


export class EditProduct extends React.Component {

  render() {
    return (
        
      <div>
        <Nav />
      <br /> <br />
      <h1 id="newProductHeader">Edit Product</h1>
       
        <div className="newProductForm">
            <div className="row">

                <div className="col-xl-6 form">
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

                    <button className="addproductbtn">Update Product</button>
                </div>
                <div className="col-xl-6 add">
                    <div className="centriraj"> 
                        
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