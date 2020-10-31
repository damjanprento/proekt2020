import React from 'react';

import '../styles/Expenses.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav } from './Nav';
import axios from 'axios';

export class Expenses extends React.Component {

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
    this.totalPrice();
  }

  getBlogPost = () => {
    axios.get('http://localhost:3001/api/user/products')
    .then((response) => {
      const data = response.data;
      this.setState({ posts: data });
      console.log(data);
    })
    .catch(() => {
      console.log('Error retreiving data.');
    });
  }

  displayBlogPost = (posts) => {
    if(!posts) return null;

    return posts.map((post, index) => ( 
      <tr key={index}>
        <td>{post.productName}</td>
        <td>{post.productType}</td>
        <td>{post.productDescription}</td>
        <td>{post.purchaseDate}</td>
        <td>{post.productPrice}</td>
      </tr>
    ))
  }

  totalPrice = () => {
    var sum = 0;
    for(var i=0; i < this.state.posts.length; i++){
      sum = sum + parseInt(this.state.posts[i].productPrice);
    }
    return sum;
  }

  render() {
    return (
        
      <div>
        <Nav />
        <div id="productsTable">

        <h1>Expenses</h1>

            <div className="d-flex flex-row bd-highlight mb-4">

                <div className="p-2 bd-highlight">
                    <div className="nesoneso">

                      <label id="kopcence1">
                        <div >
                            <input className="switch1" type="radio" id="monthly" name="switch" /> 
                            <div className="btn-monthly">Monthly</div>
                        </div>
                      </label>

                      <label id="kopcence2">
                          <div >
                            <input className="switch2" type="radio" id="yearly" name="switch" /> 
                            <div className="btn-yearly">Yearly</div>
                          </div>    
                      </label>

                    </div>
                </div>

                <div className="p-2 bd-highlight">
                    <span id="filter">Choose Month</span>
                </div>

                <div className="p-2 bd-highlight">
                    <select id="months">
                        <option id="january">January</option>
                        <option id="february">February</option>
                        <option id="march">March</option>
                        <option id="april">April</option>
                        <option id="may">May</option>
                        <option id="june">June</option>
                        <option id="july">July</option>
                        <option id="august">August</option>
                        <option id="september">September</option>
                        <option id="october">October</option>
                        <option id="november">November</option>
                        <option id="december">December</option>
                    </select>
                </div>

            </div>
          
          <table className="tableExpenses">
            <thead className="elegant-color-dark white-text">
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Product Type</th>
                <th scope="col">Product Description</th>
                <th scope="col">Purchase Date</th>
                <th scope="col">Product Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.filter(el => {
                let d = new Date(el.purchaseDate);
                return d.getFullYear() === parseInt(this.state.year) && d.getMonth() === parseInt(this.state.month);
                
              })}
              {this.displayBlogPost(this.state.posts)}
            </tbody>
          </table>
        </div>
        
        <div id="fixedPrice">
          <span id="totalSpan">Total spent: {this.totalPrice()} den.</span>
        </div>
        
      </div>
    )
  }
}