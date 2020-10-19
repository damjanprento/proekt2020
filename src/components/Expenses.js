import React from 'react';
import { Route, Switch } from "react-router-dom";

import $ from 'jquery'; 
import '../styles/Expenses.css';
import 'bootstrap/dist/css/bootstrap.css';

import slikice from '../photos/slikice.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export class Expenses extends React.Component {

  render() {
    return (
        
      <div>

        <div id="productsTable">

        <h1>Expenses</h1>

            <div class="d-flex flex-row bd-highlight mb-4">

                <div class="p-2 bd-highlight">
                    
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                      <form>
                      <label>
                        <div id="kopcence1">
                            <input class="switch" type="radio" id="monthly" name="switch" /> 
                            <span class="btn-monthly">Monthly</span>
                        </div>
                        </label>

                        <label id="kopcence2">
                          <div>
                            <input class="switch" type="radio" id="yearly" name="switch" /> 
                            <span class="btn-yearly">Yearly</span>
                          </div>
                            
                        </label>
                      </form>
                        
                    </div>
                </div>

                <div class="p-2 bd-highlight">
                    <span id="filter">Choose Month</span>
                </div>

                <div class="p-2 bd-highlight">
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
          
          <table class="tableExpenses">
            <thead class="elegant-color-dark white-text">
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Product Type</th>
                <th scope="col">Product Description</th>
                <th scope="col">Purchase Date</th>
                <th scope="col">Product Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coca-Cola</td>
                <td>Drink</td>
                <td>Carbonated Soft Drink</td>
                <td>13.04.1998</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Coca-Cola</td>
                <td>Drink</td>
                <td>Carbonated Soft Drink</td>
                <td>13.04.1998</td>
                <td>25</td>
              </tr>
              
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}