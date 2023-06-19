import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from './noteTypes';

// Action creators
export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const editNote = (note) => {
  return {
    type: EDIT_NOTE,
    payload: note,
  };
};

export const deleteNote = (noteId) => {
  return {
    type: DELETE_NOTE,
    payload: noteId,
  };
};
