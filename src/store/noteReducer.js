import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from './noteTypes';
//import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from './noteActions';

const initialState = {
  notes: [
    {
      id: '1',
      title: 'First Note',
      text: 'This is my first note!',
      date: '15/04/2021',
    },
    {
      id: '2',
      title: 'Second Note',
      text: 'This is my second note!',
      date: '21/04/2021',
    },
    {
      id: '3',
      title: 'Third Note',
      text: 'This is my third note!',
      date: '28/04/2021',
    },
  ],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export default noteReducer;
