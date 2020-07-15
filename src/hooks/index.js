import { useState } from 'react'

export const useFormWithList = () => {
    const [ input, setInput ] = useState('')
    const [ list, setList ] = useState([])

    return {
        value: input,
        list: list,
        change: e => setInput(e.target.value),
        remove: delItem => setList(list.filter(item => item !== delItem)),
        add: () => {
            setList([ ...list, input ])
            setInput('')
        }
    }
}