import AppDispatcher from '../dispatchers/AppDispatcher'
import Constants from '../constants/AppConstants';
import api from '../api';

const AppActions = {
  addNote(note){
    api.createNote(note)
    .then(() =>
      this.loadNotes()
    )
  },

  deleteNote(id){
    api.deleteNote(id)
    .then(() =>
      this.loadNotes()
   )
 },

  loadNotes(){
    api.listNotes()
    .then(({ data }) =>
      AppDispatcher.dispatch({
        type: Constants.GET_NOTE,
        notes: data
      })
    )
  }
}

export default AppActions;
