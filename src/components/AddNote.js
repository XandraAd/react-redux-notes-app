import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChangeTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
      handleAddNote(noteTitle, noteText);
      setNoteTitle('');
      setNoteText('');
    }
  };

  return (
    <div className="note new">
      <input
        type="text"
        placeholder="Title"
        value={noteTitle}
        onChange={handleChangeTitle}
      />
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChangeText}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
