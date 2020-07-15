import React from 'react'

const SpacePerson = props => {
    return <li>
            <p>{props.person.name}</p>
            <p>{props.person.craft}</p>
        </li>
}

export default SpacePerson