import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Login.css';


export class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }



  render() {
    return (
        
      <div id="app">
        
        <div className="container">
          <div id="loginForm">
            <label>E-mail</label> 
            <input type="text" id="email"/> 
            <label>Password</label> 
            <input type="password" id="password"/> 
            <button className="loginbtn" type="submit">Sign In</button>
          </div>
        </div>

        <div className="container signin">
          <p id="signIn">Or if you don't have an account, <a href="Login.js">Register</a>.</p>
        </div>
        
      </div>
    )
  }
}