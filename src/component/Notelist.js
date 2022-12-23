import React, { useContext, useEffect, useRef, useState } from "react";
import Notecard from "./Notecard";
import Notecontext from "../context/Notecontext";
import { useNavigate } from "react-router-dom";

const Notelist = (props) => {
  const navigation = useNavigate();
  const context = useContext(Notecontext);
  const { notes, getnote, editnote } = context;
  const { showAlert } = props;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getnote();
    } else {
      navigation("/login");
    }
  }, []);
  const ref = useRef(null);
  const refclose = useRef(null);
  const [note, setnote] = useState({
    id: "",
    edit_title: "",
    edit_description: "",
    edit_tag: "",
  });
  const updatenote = (currentnote) => {
    ref.current.click();
    setnote({
      id: currentnote._id,
      edit_title: currentnote.title,
      edit_description: currentnote.description,
      edit_tag: currentnote.tag,
    });
  };

  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    editnote(note.id, note.edit_title, note.edit_description, note.edit_tag);
    props.showAlert("Updated Note succesfully ", "success");

    refclose.current.click();
    // addnote(note.edit_title, note.edit_description, note.edit_tag);
  };

  return (
    <div >
      <div className="container">
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edit_title"
                      value={note.edit_title}
                      name="edit_title"
                      aria-describedby="emailHelp"
                      onChange={onchange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Decription
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edit_description"
                      value={note.edit_description}
                      name="edit_description"
                      onChange={onchange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edit_tag"
                      name="edit_tag"
                      value={note.edit_tag}
                      onChange={onchange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={refclose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleclick}
                  className="btn btn-primary"
                >
                  updatenote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {notes.map((note) => {
            return (
              <Notecard
                key={note._id}
                updatenote={updatenote}
                showAlert={showAlert}
                note={note}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notelist;
