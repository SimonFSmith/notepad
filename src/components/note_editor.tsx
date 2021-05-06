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
    this.deleteNote = this.deleteNote.bind(this);
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
  }

  deleteNote() {
    if (confirm("Voulez-vous vraiment supprimer cette note?")) {
      this.props.onDeleteButtonClick()
      window.location.reload()
    } else {

    }
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
            placeholder="Titre"
            value={this.state.noteTitre}
            onChange={this.handleTitleChange} />

          <br/>

          {/* Corps */}
          <textarea
            name="noteCorps"
            className="form-control"
            placeholder="Contenu"
            value={this.state.noteCorps}
            onChange={this.handleBodyChange} />

        </div>

        <div className="text-right">

          {/* Bouton de création d'une nouvelle note */}
          <button
            onClick={this.clearInput}
            className="btn btn-primary ml-2 rounded"
            id="bouton_sauvegarde">
              Nouvelle note
          </button>

          {/* Bouton d'annulation */}
          <button
            onClick={this.clearInput}
            className="btn btn-danger ml-2 rounded">
              Annuler
          </button>

          {/* Bouton de suppression */}
          <button
            onClick={this.deleteNote}
            className="btn btn-danger ml-2 rounded">
              Supprimer
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
