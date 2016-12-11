import React from 'react';

const Note = React.createClass({
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
        <button onClick={this.props.onDelete}>REMOVE</button>
      </div>
    )
  }
})

export default Note
