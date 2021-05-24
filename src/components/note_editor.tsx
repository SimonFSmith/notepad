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

    firebase.database().ref().push(postData);

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
          id="note_corps"
          placeholder="Contenu"
          value={this.state.noteCorps}
          onChange={this.handleBodyChange} />

        <div className="boutons_gauche">
          {/* Bouton de création d'une nouvelle note */}
          <button
            onClick={this.clearInput}
            className="btn btn-dark">
              Nouvelle note
          </button>
        </div>

        <div className="boutons_milieu">
          {/* Bouton de suppression */}
          <button
            onClick={this.deleteNote}
            className="btn btn-dark"
            id="boutton_supprimer">
              Supprimer
          </button>
        </div>

        <div className="boutons_droite">
          {/* Bouton d'annulation */}
          <button
            onClick={this.clearInput}
            className="btn btn-dark">
              Annuler
          </button>

          {/* Bouton de sauvegarde */}
          <button
            onClick={this.handleSubmit}
            className="btn btn-dark"
            id="bouton_sauvegarde">
              Sauvegarder
          </button>
        </div>

      </div>
    );
  }
}

export default TextEditor;
