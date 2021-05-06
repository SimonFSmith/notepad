import React, { Component } from 'react';
import firebase from 'firebase/app';

export interface NoteFoldersProps {

}

export interface NoteFoldersState {

}

class NoteFolders extends React.Component<NoteFoldersProps, NoteFoldersState> {
  constructor(props: NoteFoldersProps) {
    super(props);
    //this.state = { :  };
  }
  render() {
    return (
      <div className="folders">
        <button type="button" className="btn btn-light">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </button>
      </div>
     );
  }
}

export default NoteFolders;
