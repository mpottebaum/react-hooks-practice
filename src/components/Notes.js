import React, { useState } from 'react'
import Note from './Note'

const Notes = () => {
    const [ note, setNote ] = useState('')
    const [ notes, setNotes ] = useState([])

    
    const handleAddNote = () => {
        setNotes([...notes, note])
        setNote('')
    }
    
    const handleDeleteNote = delNote => {
        setNotes(notes.filter(note => note !== delNote))
    }
    
    const renderNotes = () => {
        return notes.map(note => {
            return <Note note={note} handleDeleteNote={handleDeleteNote} />
        })
    }
    return <div>
        <input type='text' onChange={e => setNote(e.target.value)} value={note} />
        <button onClick={handleAddNote}>Add Note</button>
        <ul>{renderNotes()}</ul>
    </div>
}

export default Notes