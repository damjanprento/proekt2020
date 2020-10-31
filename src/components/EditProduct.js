import React from 'react';

import '../styles/NewProduct.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav } from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export class EditProduct extends React.Component {

  state = {
    productName: '',
    productDescription: '',
    productType: '',
    purchaseDate: '',
    productPrice: ''
  }


  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  submit = (event) => {
    
    event.preventDefault();

    const payload = {
      productName: this.state.productName,
      productDescription: this.state.productDescription,
      productType: this.state.productType,
      purchaseDate: this.state.purchaseDate,
      productPrice: this.state.productPrice
    };

    axios.post('http://localhost:3001/api/user/updateproduct', payload)
      .then(() => {
        console.log('Product Added!');
        setTimeout(() => {this.props.history.push('/products')}, 500);
      })
      .catch(() => {  
        console.log('ERROR');
      });

  };

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
                      <input type="text" value={this.state.productName} onChange={this.handleChange} name="productName" />  <br />
                      <label>Product Description</label> <br />
                      <input type="text" value={this.state.productDescription} onChange={this.handleChange} name="productDescription" />  <br /> <br />
                      <label>Product Type</label> <br />
                      <input type="text" value={this.state.productType} onChange={this.handleChange} name="productType" />  <br /> <br />
                      <label>Purchase Date</label> <br />
                      <input type="date" value={this.state.purchaseDate} onChange={this.handleChange} name="purchaseDate" />  <br /> <br />
                      <label>Product Price</label> <br />
                      <input type="text" value={this.state.productPrice} onChange={this.handleChange} name="productPrice" />  <br /> <br />

                      <button onClick={this.submit}  className="addproductbtn" type="submit">Update Product</button>
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