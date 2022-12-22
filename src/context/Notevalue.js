import React, { useState } from 'react'
import Notecontext from './Notecontext'

export const apiURL = "https://dead-plum-spider-hat.cyclic.app/"

const Notevalue = (props) => {
 const notesint=[]
const [notes ,setnote] = useState(notesint)


const getnote = async () =>{
  const response = await fetch(`${apiURL}/api/note/notes`, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',  
      "auth-token":localStorage.getItem('token')
    } 
  });
  const json = await response.json()
  console.log(json)
  setnote(json)
  }

const addnote = async (title,description,tag) =>{
  const response = await fetch(`${apiURL}/api/note/addnote`, { 
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json', 
      "auth-token":localStorage.getItem('token')    }, 
    body: JSON.stringify({title ,description ,tag}) 
  });
  const note = await response.json()
  setnote(notes.concat(note))

}

const deletenote =async (id) =>{
  const response = await fetch(`${apiURL}/api/note/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json', 
      "auth-token":localStorage.getItem('token')
    },
  });
  const json = response.json();
  
  

  const newNote = notes.filter((note)=>{return note._id!==id})
  
  setnote(newNote)

}

const editnote = async (id,title,description,tag) =>{
  const response = await fetch(`${apiURL}/api/note/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', 
      "auth-token":localStorage.getItem('token')
    },
    body: JSON.stringify({title ,description ,tag}) 
  });
  const json = response.json();
  
  const newnotes = JSON.parse(JSON.stringify(notes))
  for (let index = 0; index < notes.length; index++) { 
    const element = newnotes[index];
    if (element._id === id ) {
      newnotes[index].title = title;
      newnotes[index].description = description;
      newnotes[index].tag = tag;
      break;
    }

  }
  console.log(id)
setnote(newnotes)
}

    return (
<Notecontext.Provider value={{notes , addnote ,deletenote ,editnote ,getnote }}>
    {props.children}
</Notecontext.Provider>
  ) 
}

export default Notevalue 
