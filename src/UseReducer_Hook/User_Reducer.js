import React, { useReducer } from 'react'
const book = [
    {
        name: 'Pother Pechal',
        writer: 'Abu Raihan'
    },
    {
        name: 'Bikel Belar Golpo',
        writer: 'Shakil'
    },
    {
        name: 'Songshar',
        writer: 'A.R. Shakil'
    },
]

const User_Reducer = () => {
    const [state, dispatch] = useReducer(reducer, book)
    return (

        < div >

        </div >
    )
}

export default User_Reducer
