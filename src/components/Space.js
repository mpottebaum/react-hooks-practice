import React, { useState, useEffect } from 'react'
import SpacePerson from './SpacePerson'

const Space = () => {
    const [ people, setPeople ] = useState(null)

    useEffect(() => {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(resp => setPeople(resp.people))
    }, [])
    
    const renderPeople = () => {
        return people.map((person, i) => <SpacePerson person={person} key={i + 1} />)
    }
    return <div>
        {
            people ?
            <ul>{renderPeople()}</ul>
            :
            <p>Loading...</p>
        }
    </div>
}

export default Space