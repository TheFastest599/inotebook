import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

function Noteitem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-4 col-lg-3 my-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-between">
            <div>
              <i
                className="fa-solid fa-trash-can mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert('Deleted Successfully', 'success');
                }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square mx-2"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
            <p className="card-text">
              <small className="text-body-secondary">#{note.tag}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
