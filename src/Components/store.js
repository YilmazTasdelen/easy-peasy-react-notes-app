import { createStore, action,  } from 'easy-peasy';
import { v4 as uuidv4 } from 'uuid';

export const  store = createStore({
    notes: [],

    addNote: action((state, note) => {
      state.notes.push({
         text:note,
         id : uuidv4()
        });
    }),

    removeNote: action((state, payload)=>{
    state.notes = state.notes.filter((note)=>note.id != payload.id)
    }),

  });