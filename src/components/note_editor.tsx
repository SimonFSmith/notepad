import React, { Component } from 'react';
import firebase from 'firebase/app';
import { networkInterfaces } from 'os';

class TextEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      noteTitre: '',
      noteCorps: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleTitleChange(event) {
    this.setState({noteTitre: event.target.value});
  }

  handleBodyChange(event) {
    this.setState({noteCorps: event.target.value});
  }

  handleSubmit(event) {
    let postData = {
      title: this.state.noteTitre,
      body: this.state.noteCorps
    }

    var dbRef = firebase.database().ref();
    dbRef.push(postData);

    this.setState({noteTitre: ""});
    this.setState({noteCorps: ""});

    alert("Note sauvegardée!")
  }

  clearInput() {
    this.setState({noteTitre: ""});
    this.setState({noteCorps: ""});
  }

  render() {
    return (
      <div className="Ecrire">
        <div className="form-group">

          {/* Titre */}
          <input
            name="noteTitre"
            className="form-control"
            placeholder="Titre de la note"
            value={this.state.noteTitre}
            onChange={this.handleTitleChange} />

          <br/>

          {/* Corps */}
          <textarea
            name="noteCorps"
            className="form-control"
            placeholder="Corps de la note"
            value={this.state.noteCorps}
            onChange={this.handleBodyChange} />

        </div>

        <div className="text-right">

          {/* Bouton d'annulation */}
          <button
            onClick={this.clearInput}
            className="btn btn-danger mr-2 rounded">
              Annuler
          </button>

          {/* Bouton de sauvegarde */}
          <button
            onClick={this.handleSubmit}
            className="btn btn-success ml-2 rounded"
            id="bouton_sauvegarde">
              Sauvegarder
          </button>

        </div>
      </div>
    );
  }
}

export default TextEditor;

