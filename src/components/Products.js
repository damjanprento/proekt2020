import React from 'react';
import { Link } from "react-router-dom";

import '../styles/Products.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav } from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


export class Products extends React.Component {

  state = {
    productName: '',
    productType: '',
    productDescription: '',
    purchaseDate: '',
    productPrice: '',
    posts: []
  }

  componentDidMount = () => {
    this.getBlogPost();
  }

  getBlogPost = () => {
    axios.get('http://localhost:3001/api/user/products')
    .then((response) => {
      const data = response.data;
      this.setState({ posts: data });
      console.log('Data received');
      console.log(data);
    })
    .catch(() => {
      console.log('Error retreiving data.');
    });
  }

  displayBlogPost = (posts) => {
    if(!posts) return null;

    return posts.map((post, index) => ( 
      <tr key={post._id}>
        <td>{post.productName}</td>
        <td>{post.productType}</td>
        <td>{post.productDescription}</td>
        <td>{post.purchaseDate}</td>
        <td>{post.productPrice}</td>
        <td>
          <Link to='/editproduct'>
           <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </Link>
          <a href="#">
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </a>
        </td>
      </tr>
    ))
  }

  render() {
    return (
        
      <div>
        <Nav />
        <div id="productsTable">
          <div className="d-flex bd-highlight">
            <div className="p-2 flex-grow-1">
              <h1 id="productsHeader">Products</h1>
            </div>
            <div className="p-2 bd-highlight">
              <span id="filter">Filter by:</span>
            </div>
            <div className="p-2 bd-highlight">
              <select id="filterBy">
                <option id="year">Year</option>
                <option id="highestPrice">Highest Price</option>
                <option id="lowestPrice">Lowest Price</option>
                <option id="latestPurchase">Latest Purchase</option>
              </select>
            </div>
          </div>
          
          <table className="tableProducts">
            <thead className="elegant-color-dark white-text">
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Product Type</th>
                <th scope="col">Product Description</th>
                <th scope="col">Purchase Date</th>
                <th scope="col">Product Price</th>
                <th scope="col">Update / Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.displayBlogPost(this.state.posts)}
            </tbody>
          </table>
        </div>

        <Link to='/newproduct'>
          <button id="fixedButton">New Product</button>
        </Link>
        

      </div>
    )
  }
}