import React from 'react';
import { useStoreActions} from 'easy-peasy';

export default function AddNoteForm() {
    const addNote = useStoreActions((actions) => actions.addNote);
    const [value, setValue] = React.useState('');
    return (
      <>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <button onClick={() => addNote(value)}>Add Todo</button>
      </>
    );
  }
  