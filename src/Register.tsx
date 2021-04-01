/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';



const Register = () => {
  return (
    <body>
      <div id="login">
        <h3 className="text-center text-white pt-5"></h3>
        <div className="container">
           <div id="login-row" className="row justify-content-center align-items-center" >
             <div id="login-coid=lumn" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form id="login-fom" className="form" action="" method="post">
                    <h3 className="text-center text-info">Création de compte</h3>
                    <div className="form-goup">
                        <label htmlFor="email" className="text-info">Adresse Courielle: </label><br/>
                        <input type="text" name="email" id="email" className="form-control"></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Mot de passe" className="text-info">Mot de passe:</label>
                      <input type="text" name="password" id="password" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="remember-me" className="text-info" ><span>Rester connecté</span><span><input id="remember-me" name="remember-me" type="checkbox"></input></span></label><br/>
                      <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" ></input>
                    </div>
                    <div id="register-link" className="text-right">
                      <a href="#" className="text-info">Revemir en arrièr</a>
                    </div>
                  </form>
                </div>
             </div>
           </div>
        </div>
      </div>
    </body>
  );
};

export default Register;
