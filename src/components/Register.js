import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react'
import '../index.css';
import JoinForm from './JoinForm';
import * as serviceWorker from '../serviceWorker';


class Register extends Component {

   render(){

   return(
    <div className="main-container d-table position-relative m-auto">
          <div className="form-container d-table-cell align-middle">
    <JoinForm />
    </div>
    </div>
    );

    }
    }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Register;
