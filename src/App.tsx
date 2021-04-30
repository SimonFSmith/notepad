// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getHeapSnapshot } from 'v8';
import './App.global.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { rootCertificates } from 'tls';
import TextEditor from './components/note_editor';
import AllNotes from './components/display_all_notes';
import NotePad from './components/notepad';

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
if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
else {
  firebase.app();
}

let ref = firebase.database().ref('notes')

ref.on('value', (snapshot) => {
  console.log(snapshot.val());
})

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={NotePad} />
      </Switch>
    </Router>
  );
}
