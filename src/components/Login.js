import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Login.css';


export class Login extends React.Component {

  render() {
    return (
        
      <div id="app">
        
        <div class="container">
          <form id="loginForm">
            <label>E-mail</label> 
            <input type="text" id="email"/> 
            <label>Password</label> 
            <input type="password" id="password"/> 
            <button class="loginbtn" type="submit">Sign In</button>
          </form>
        </div>

        <div class="container signin">
          <p id="signIn">Or if you don't have an account, <a href="Login.js">Register</a>.</p>
        </div>
        
      </div>
    )
  }
}