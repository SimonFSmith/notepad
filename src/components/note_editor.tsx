import React, { Component } from 'react';
import firebase from 'firebase/app';

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
    this.setTitleAndBody = this.setTitleAndBody.bind(this);
  }

  handleTitleChange(event) {
    this.setState({...this.state, noteTitre: event.target.value});
  }

  handleBodyChange(event) {
    this.setState({...this.state, noteCorps: event.target.value});
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

  setTitleAndBody(result) {
    setTimeout(() => {
      this.setState({noteTitre: result.title})
      this.setState({noteCorps: result.body})
    }, 100)
  }

  render() {
    return (
      <div className="writing">
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
            className="btn btn-danger ml-2 rounded">
              Annuler
          </button>

          {/* Bouton de sauvegarde */}
          <button
            onClick={this.handleSubmit}
            className="btn btn-success ml-2 rounded"
            id="bouton_sauvegarde">
              Sauvegarder
          </button>

          {/* Bouton de création d'une nouvelle note */}
          <button
            onClick={this.clearInput}
            className="btn btn-primary ml-2 rounded"
            id="bouton_sauvegarde">
              Nouvelle note
          </button>

        </div>
      </div>
    );
  }
}

export default TextEditor;
