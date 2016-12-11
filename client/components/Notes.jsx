import React from 'react';
import Note from '../components/Note.jsx';

const Notes = React.createClass({
  render(){
    return (
      <div>
      {this.props.notes.map(note => <Note title={note.title} key={note.id} onDelete={this.props.onNoteDelete.bind(null, note)} text={note.text}/>)}
      </div>
    )
  }
})

export default Notes
