import React from 'react';

class SingleNote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key : "",
      title : "",
      body : ""
    };

    this.state.key = this.props.number
    this.state.title = this.props.title
    this.state.body = this.props.body
    this.returnKey = this.returnKey.bind(this);
  }

  returnKey() {
    this.props.onNoteClick(this.state.key)
  }

  render() {
    return (
      <div id="hide_overflow" onClick={this.returnKey}>
        <div className="d-flex w-100 justify-content-between">
          <h5 id="hide_overflow" className="mb-1">{this.state.title}</h5>
        </div>
        <p className="mb-1">{this.state.body}</p>
      </div>
    )
  }

}

export default SingleNote;
