import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import '../styles/Nav.css';
import 'bootstrap/dist/css/bootstrap.css';

import slikice from '../photos/slikice.jpg';

import { Products } from './Products';
import { Expenses } from './Expenses';


export class Nav extends React.Component {
    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <Link to='/products'>
                        <button id="products">Products</button>
                    </Link>
                    
                    <Link to='/expenses'>
                        <button id="expenses">Expenses</button>
                    </Link>
                    
                
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbar-list-4">
                    
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={slikice} width="40" height="40" class="rounded-circle" />
                    </a>
                    
                    </div>
                </nav>
            </div>
        )
    }   
}
