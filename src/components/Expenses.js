import React from 'react';

import '../styles/Expenses.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav } from './Nav';

export class Expenses extends React.Component {

  render() {
    return (
        
      <div>
        <Nav />
        <div id="productsTable">

        <h1>Expenses</h1>

            <div className="d-flex flex-row bd-highlight mb-4">

                <div className="p-2 bd-highlight">
                    
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                      <form>
                      <label>
                        <div id="kopcence1">
                            <input className="switch" type="radio" id="monthly" name="switch" /> 
                            <span className="btn-monthly">Monthly</span>
                        </div>
                        </label>

                        <label id="kopcence2">
                          <div>
                            <input className="switch" type="radio" id="yearly" name="switch" /> 
                            <span className="btn-yearly">Yearly</span>
                          </div>
                            
                        </label>
                      </form>
                        
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