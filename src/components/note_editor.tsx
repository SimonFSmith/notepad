class TextEditor extends React.Component {
  render() {
    return (
      <div className="Ecrire">
        <div className="form-group">
          {/* Titre */}
          <input type="text" className="form-control" placeholder="Titre de la note" aria-label="Username" aria-describedby="basic-addon1" onChange={event => console.log(event)}></input>
          <br/>
          {/* Corps */}
          <textarea className="form-control" placeholder="Corps de la note" id="exampleFormControlTextarea1"></textarea>
        </div>
        <div className="text-right">
            {/* Bouton d'annulation */}
            <button className="btn btn-danger mr-2 rounded">Annuler</button>
            {/* Bouton de sauvegarde */}
            <button className="btn btn-success ml-2 rounded" id="bouton_sauvegarde">Sauvegarder</button>
        </div>
      </div>
    )
  }
}
