import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Login.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';


export class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  submit = (event) => {
    
    event.preventDefault();

    const payload = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://localhost:3001/api/user/login', payload)
      .then(() => {
        console.log('Logged in!');
      })
      .catch(() => {  
        console.log('ERROR');
      });

  };

  render() {
    return (
      
      <div id="app">
        
        <div className="container">
          <div id="loginForm">
            <label>E-mail</label> 
            <input type="text" value={this.state.email} onChange={this.handleChange} name="email" /> 
            <label>Password</label> 
            <input type="password" value={this.state.password} onChange={this.handleChange} name="password" /> 
            <button onClick={this.submit} className="loginbtn" type="submit">Sign In</button>
          </div>
        </div>

        <div className="container signin">
          <p id="signIn">Or if you don't have an account, <Link to="/register">Register</Link>.</p>
        </div>
        
      </div>
    )
  }
}