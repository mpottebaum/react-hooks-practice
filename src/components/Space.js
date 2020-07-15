import React, { useState, useEffect } from 'react'
import SpacePerson from './SpacePerson'

const Space = () => {
    const [ people, setPeople ] = useState(null)

    useEffect(() => {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(resp => setPeople(resp.people))
        console.log('useEffect build up')
        return () => {
            console.log('useEffect cleanup')
        }
    }, [])

    const renderPeople = () => {
        return people.map(person => <SpacePerson person={person} />)
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