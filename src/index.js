import React from 'react';
import './FontAwesomeIcons';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import { App } from './components/App';
import { Login } from './components/Login';
import { Products } from './components/Products';
import { Expenses } from './components/Expenses';
import { NewProduct } from './components/NewProduct';
import { Register } from './components/Register';


ReactDOM.render(
    <Expenses />
    , document.getElementById("root"));