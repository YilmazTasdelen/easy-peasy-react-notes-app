import React from 'react';
import { useStoreState,useStoreActions  } from 'easy-peasy';



export default function Notes() {
    
    const notes = useStoreState((state) => state.notes);
    const removeNote = useStoreActions((actions) => actions.removeNote);

    return (
      <ul>
        {notes.map((note) => (
          <li id={note.id}>id: {note.id} - name: {note.text} 
          <button onClick={()=>removeNote(note)}> delete </button>
          </li>
        ))}
      </ul>
    );
  }
  