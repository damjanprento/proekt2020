import React from 'react';
import { Link } from "react-router-dom";

import '../styles/Products.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav } from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export class Products extends React.Component {

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
              <tr>
                <td>Coca-Cola</td>
                <td>Drink</td>
                <td>Carbonated Soft Drink</td>
                <td>13.04.1998</td>
                <td>25</td>
                <td>
                  <Link to='/editproduct'>
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                  </Link>
                  <a href="#">
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Coca-Cola</td>
                <td>Drink</td>
                <td>Carbonated Soft Drink</td>
                <td>13.04.1998</td>
                <td>25</td>
                <td>
                  <Link to='/editproduct'>
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                  </Link>
                  <a href="#">
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </a>
                </td>
              </tr>
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