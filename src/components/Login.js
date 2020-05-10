import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';


class Login extends Component {
  render(){

    return(
     <Fragment>
      <div className="main-container d-table position-relative m-auto">
       <div className="form-container d-table-cell align-middle">

        <div className="py-5 border-gray border-top border-left border-right border-bottom">

         <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-5">
          <legend className="form-label mb-0">Kirjaudu</legend>
         </div>


         <div className="form-group px-3 pb-2">
          <div className="d-flex flex-row justify-content-between align-items-center">
           <label  className="control-label">
            Käyttäjätunnus<br />
            <input type="text" className="form-control" />
           </label>
           </div>
           <div className="d-flex flex-row justify-content-between align-items-center">
            <label  className="control-label">
             Salasana<br />
             <input type="password" className="form-control" />
            </label>
            </div>
           </div>

           <br />
           <button type="button" className="btn btn-primary text-uppercase px-3 mx-3 py-2">Kirjaudu sisään</button>
          </div>



            <NavLink to="/register" className="olink">Rekisteröidy</NavLink>
         </div>

       </div>


      </Fragment>
    );
  }

}

export default Login;