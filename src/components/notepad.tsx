import React from 'react';
import TextEditor from './note_editor';
import AllNotes from './display_all_notes';
import firebase from 'firebase/app';
import NoteFolders from './note_folders';

export interface NotePadState {
  selected_note : String
}

class NotePad extends React.Component<NotePadProps, NotePadState> {
  constructor(props: NotePadProps) {
    super(props);
    this.state = { selected_note : "" };
    this.textRef = React.createRef();

    this.onNoteChanged = this.onNoteChanged.bind(this)
    this.onDeleteRequest = this.onDeleteRequest.bind(this)
  }

  onDeleteRequest() {
    firebase.database().ref("/" + this.state.selected_note).remove()
  }

  onNoteChanged(noteKey : String) {
    var result = {
      title: "",
      body: ""
    }

    this.setState({ selected_note: noteKey }, () => {
      firebase.database().ref("/" + noteKey).on("value", function(snapshot) {
          result.title = snapshot.val().title
          result.body = snapshot.val().body
      });
    });
    this.textRef.current.setTitleAndBody(result)
  }

  render() {
    return (

      <>



      <AllNotes onNoteChanged={this.onNoteChanged} />

      <TextEditor ref={this.textRef} onDeleteButtonClick={this.onDeleteRequest} />

      </>

  );
  }
}

export default NotePad;
