import { EventEmitter } from 'events';

import AppDispatcher from '../dispatchers/AppDispatcher'
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change'

let _notes = []

function formatNote(note) {
    return {
        id: note._id,
        title: note.title,
        text: note.text
    };
}

const AppStore = Object.assign({}, EventEmitter.prototype, {
  getNotes(){
    return _notes
  },

  emitChange: function() {
      this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
  }
})


AppDispatcher.register(function(action) {
  switch(action.type) {
    case AppConstants.GET_NOTE: {
      _notes = action.notes.map(formatNote)

      AppStore.emitChange()
      break
    }
    default: {
      console.log('No such hangler')
    }
  }
})

export default AppStore;
