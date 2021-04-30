import React, { Component } from 'react';
import firebase from 'firebase/app';
import SingleNote from './single_note';
import TextEditor from './note_editor';

class AllNotes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes : [],
      selected_key : ""
    };

    this.onNoteClick = this.onNoteClick.bind(this);
  }

  componentDidMount() {
    firebase.database().ref().on("value", snapshot => {
      let notes = [];
      snapshot.forEach(snap => {
        let note = {
          title : snap.val().title,
          body : snap.val().body,
          key : snap.key
        }
        notes.push(note)
      });
      this.setState({ notes: notes });
    });
  }

  onNoteClick(number : string) {
    this.setState({ selected_key: number}, () => {
      this.props.onNoteChanged(this.state.selected_key)
    })
  }

  render() {
    return (
      <div className="all_notes">
        <div className="list-group">
          <button
            type="button"
            className="btn btn-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
          </button>

          {this.state.notes.map(note => {
            return(
              <>
                <a href="#" className={"list-group-item list-group-item-action" + (this.state.selected_key == note.key ? " active" : "")}>
                  <SingleNote number={note.key} title={note.title} body={note.body.substring(0, 30) + "..."} onNoteClick={this.onNoteClick} />
                </a>
              </>
            )
          })}
        </div>
      </div>
    );
  }
}

export default AllNotes;
