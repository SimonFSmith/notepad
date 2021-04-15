import React, { Component } from 'react';

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
    alert('Titre: ' + this.state.noteTitre + '\nCorps: ' + this.state.noteCorps);
    event.preventDefault();
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

