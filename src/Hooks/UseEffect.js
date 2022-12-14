import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("useEffect")
    }, [loading])
    return (
        <div>
            {console.log("Rendering")}
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setLoading(!loading)}>Loading</button>
        </div>
    )
}

export default UseEffect
