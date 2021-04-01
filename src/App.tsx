/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Register from './Register';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuFSYdHSVVgM7Ai2bgwf2bLTnS6y1_KZM',
  authDomain: 'application-notes-6dde3.firebaseapp.com',
  projectId: 'application-notes-6dde3',
  storageBucket: 'application-notes-6dde3.appspot.com',
  messagingSenderId: '1057276670354',
  appId: '1:1057276670354:web:d0e7b2ccee347d27a7514b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Hello = () => {
  return (
    <body>
      <div id="login">
        <h3 className="text-center text-white pt-5"></h3>
        <div className="container">
           <div id="login-row" className="row justify-content-center align-items-center" >
             <div id="login-coid=lumn" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form id="login-fom" className="form" action="" method="post">
                    <h3 className="text-center text-info">Bienvenue</h3>
                    <div className="form-goup">
                        <label htmlFor="email" className="text-info">Adresse Courielle: </label><br/>
                        <input type="email" name="email" id="email" className="form-control"></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Mot de passe" className="text-info">Mot de passe:</label>
                      <input type="password" name="password" id="password" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="remember-me" className="text-info" ><span>Rester connecté</span><span>.<input id="remember-me" name="remember-me" type="checkbox"></input></span></label><br/>
                      <input type="submit" name="submit" className="btn btn-info btn-md" value="Connecter" ></input>
                    </div>
                    <div id="register-link" className="text-right">
                      <a href="#" className="text-info">Créer un compte</a>

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

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
        <Route path= "/Register" component={Register}/>
      </Switch>
    </Router>
  );
}
