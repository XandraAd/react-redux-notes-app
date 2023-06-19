import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteNote, editNote } from "../store/noteActions";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const Note = ({ note, deleteNote, editNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editText, setEditText] = useState(note.text);

  const handleEdit = () => {
    if (isEditing) {
      const editedNote = { ...note, title: editTitle, text: editText };
      editNote(editedNote);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <div className={`note ${isEditing ? "editing" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            rows="8"
            cols="10"
            placeholder="Type note here..."
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          ></textarea>
          <div className="note-footer">
            <button className="save" onClick={handleEdit}>
              Save
            </button>
            <button className="cancel" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="note_title">{note.title}</h3>
          <p>{note.text}</p>
          <div className="note-footer">
            <small>{note.date}</small>
            <div>
              <button className="edit" onClick={() => setIsEditing(true)}>
                <MdEdit size="1.3em" />
              </button>
              <button className="delete" onClick={handleDelete}>
                <MdDeleteForever size="1.3em" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    editNote: (note) => dispatch(editNote(note)),
  };
};

export default connect(null, mapDispatchToProps)(Note);
