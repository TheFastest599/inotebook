import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: '',
    description: '',
    tag: '',
  });
  const handleclick = () => {
    addNote(note.title, note.description, note.tag);
    props.showAlert('Note added succesfully', 'success');
    setNote({ title: '', description: '', tag: '' });
  };

  const onChange = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button
          type="button"
          onClick={handleclick}
          disabled={note.titlelength < 5 || note.description.length < 5}
          className="btn btn-primary"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
