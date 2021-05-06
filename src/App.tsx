import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import NotePad from './components/notepad';

// Configuration de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCuFSYdHSVVgM7Ai2bgwf2bLTnS6y1_KZM',
  authDomain: 'application-notes-6dde3.firebaseapp.com',
  projectId: 'application-notes-6dde3',
  storageBucket: 'application-notes-6dde3.appspot.com',
  messagingSenderId: '1057276670354',
  appId: '1:1057276670354:web:d0e7b2ccee347d27a7514b',
};

// Initialisation de Firebase
if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
else {
  firebase.app();
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={NotePad} />
      </Switch>
    </Router>
  );
}
