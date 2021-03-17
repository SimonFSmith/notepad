// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

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
    <body className="container">
      <div className="Compte">Compte</div>
      <div className="Dossier">Dossier notes</div>
      <div className="favorites">Notes favorites</div>
      <div className="Toutes">Toutes les notes</div>
      <div className="Barre">Barre doutils</div>
      <div className="Ecrire">

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Espace pour entrer la note</label>
          <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
        </div>

        <div className="text-right">
            <button className="btn btn-danger mr-2 rounded">Annuler</button>
            <button className="btn btn-success ml-2 rounded">Sauvegarder</button>
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
      </Switch>
    </Router>
  );
}
