import React, { Component } from 'react';

class TextEditor extends Component {

constructor(props) {
  super(props);
  this.state = {value: ''};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('Le titre a été soumis : ' + this.state.value);
  event.preventDefault();
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
            value={this.state.value}
            onChange={this.handleChange} />

          <br/>

          {/* Corps */}
          <textarea
            name="noteCorps"
            className="form-control"
            placeholder="Corps de la note"
            onChange={event => console.log(event)} />

        </div>

        <div className="text-right">

          {/* Bouton d'annulation */}
          <button
            className="btn btn-danger mr-2 rounded">
              Annuler
          </button>

          {/* Bouton de sauvegarde */}
          <button
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

