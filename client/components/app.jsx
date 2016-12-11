import React from 'react'
import AppStore from '../stores/AppStore'
import AppActions from '../actions/AppActions'
import Notes from '../components/Notes.jsx'

function getStatesFromStore(){
  return {
    title: '',
    text: '',
    notes: AppStore.getNotes()
  }
}

const App = React.createClass({
  getInitialState() {
    return getStatesFromStore()
  },

  componentWillMount() {
    AppActions.loadNotes();
  },

  handteTitleChange(event){
    this.setState({title: event.target.value})
  },

  handleTextChange(event){
    this.setState({text: event.target.value})
  },

  handlePostCreate(){
    const note = {
      title: this.state.title,
      text: this.state.text
    }

    AppActions.addNote(note)
    this.setState({title: "", text: ""})
  },

  handleNoteDelete(note) {
    AppActions.deleteNote(note.id)
  },

  componentDidMount(){
    AppStore.addChangeListener(this._change)
  },

  componentWillUnmound(){
    AppStore.removeChangeListener(this._change)
  },

  render() {
    return (
        <div>
            <h2>New note</h2>
            <input onChange={this.handteTitleChange} value={this.state.title}/>
            <textarea onChange={this.handleTextChange} value={this.state.text}/>
            <button onClick={this.handlePostCreate}>Create note</button>
            <Notes onNoteDelete={this.handleNoteDelete} notes={this.state.notes}/>
        </div>
    );
  },

  _change(){
    this.setState(getStatesFromStore())
  }
});

export default App;
