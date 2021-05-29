import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import './App.global.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import Login from './Login';
import Signup from './Signup';
import NotePad from './components/notepad';




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

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "1500px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/notepad" component={NotePad}/>
              <Route path="/" component={Signup} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export const auth = firebase.auth()

export default App
