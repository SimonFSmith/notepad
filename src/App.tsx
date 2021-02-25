// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
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
    <body className="mainwindow">
      <div>
        <div className="topleft">
          <section>
            <h4>Compte</h4>
          </section>
        </div>

        <div className="bottomleft">
          <section>
            <h4>Dossier de notes</h4>
          </section>
        </div>

        <div className="middletop">
          <section>
            <h4>Notes favorites</h4>
          </section>
        </div>

        <div className="middlebottom">
          <section>
            <h4>Toutes les notes</h4>
          </section>
        </div>

        <div className="righttop">
          <section>
            <h4>Barre doutils</h4>
          </section>
        </div>

        <div className="rightbottom">
          <section>
            <h4>Prise de notes</h4>
          </section>
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
