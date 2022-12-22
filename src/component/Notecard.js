import { warning } from "@remix-run/router";
import React, { useContext,useMemo, useRef, useState } from "react";
import Notecontext from "../context/Notecontext";

const Notecard = (props) => {
  const context = useContext(Notecontext);
  const { deletenote } = context;
  const { note, updatenote } = props;
  const arr = [
    "danger",
    "success",
    "dark",
    "primary",
    "secondary",
    "info",
    "warning",
  ];
  const calculation = useMemo(() =>{
    return Math.floor(Math.random() * arr.length)

  },[]);
  console.log(calculation);
  return (
    <div className="col-md-4">
      <div className={`card text-bg-${arr[calculation]} my-3 `} style={{ height:"250px"}} >
        <div className="d-flex align-items-center justify-content-between  ">
          <div className="card-header flex-grow-1">#{note.tag}</div>
                
    <i className="fa-regular fa-pen-to-square  mx-2" onClick={()=>{updatenote(note)}} ></i>
    <i className="fa-regular fa-trash-alt mx-2" onClick={()=>{deletenote(note._id);

    
    props.showAlert(" Deleted Note succesfully ", "success");
  }}></i>
        </div>
        <div className="card-body">
          <h4 className="card-title">{note.title}</h4>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
      {/* <div className='col-md-4' >
      <div className="card my-3 container">
  <div className="card-body">
    <div className='d-flex align-items-center'>   
       <h5 className="card-title">{note.title}</h5>
      
    </div>

    <p className="card-text">{note.description}</p>
  </div>
</div>

 </div>
  */}
    </div>
  );
};

export default Notecard;
