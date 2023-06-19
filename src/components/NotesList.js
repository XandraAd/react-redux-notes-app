import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote, editNote } from '../store/noteActions';
import { MdSearch } from 'react-icons/md';
import Note from './Note';

const NotesList = ({ notes, addNote, deleteNote, editNote, mode }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: 'New Note',
      text: '',
      date: new Date().toLocaleDateString(),
    };
    addNote(newNote);
  };

  const rootClassName = `notes-list ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`;

  return (
    <div className={rootClassName}>
      <div className='search'>
        <MdSearch className='search-icons' size='1.3em' />
        <input
          onChange={handleSearchChange}
          type='text'
          placeholder='Search previous notes...'
          value={searchQuery}
        />
      </div>

      <br />

      <button onClick={handleAddNote}>Add Note</button>
      {filteredNotes.map((note) => (
        <Note
          key={note.id}
          note={note}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    mode: state.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    editNote: (note) => dispatch(editNote(note)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
