import React, { useEffect, useState } from 'react'

const DataFetchOne = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
                console.log(data)
            })
            .catch(err => {
                setError(error)
            })
    }, [])
    return (
        <div>
            <h5>{data && data.map(item => {
                return item.title;
            })}</h5>
        </div>
    )
}

export default DataFetchOne
