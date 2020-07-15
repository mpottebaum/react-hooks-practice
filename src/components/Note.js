import React from 'react'

const Note = props => {
    return <li>
        <p>{props.note}</p>
        <button onClick={() => props.handleDeleteNote(props.note)}>Delete</button>
    </li>
}

export default Note