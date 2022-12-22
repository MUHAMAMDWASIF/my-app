import React, { useContext, useState } from "react";
import Notecard from "./Notecard";
import Notelist from "./Notelist";
import Notecontext from "../context/Notecontext";

const Homebody = (props) => {
  const context = useContext(Notecontext);
  const { addnote } = context;
  const {showAlert}=props
  const [note, setnote] = useState({ title: "", description: "", tag: "" });


  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
    props.showAlert("Add Note Suuccessfully ", "success");
    
  };

  return (
    <div className="container">
      <div className="container px-5">
        <h2>Add a Note</h2>
        <form>
          <div className="mt-1" >
            <label htmlFor="tittle" className="form-label fs-3">
              Tittle
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onchange}
              
            />
          </div>
          <div className="mt-1">
            <label htmlFor="description" className="form-label fs-3">
              Description
            </label>
            <input
              type="text"
              value={note.description}
              className="form-control"
              id="description"
              name="description"
              onChange={onchange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="tag" className="form-label fs-3">
              Tag
            </label>
            <input
            value={note.tag}
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onchange}
            />
          </div>
          <button
          disabled={note.title.length<5 || note.description.length<5}
            type="submit"
            className="btn btn-primary"
            onClick={handleclick}
          >
            Add Note
          </button>
        </form>
      </div>
      <div className="row mx-4">
        <Notelist showAlert={showAlert}/>
      </div>
    </div>
  );
};

export default Homebody;
