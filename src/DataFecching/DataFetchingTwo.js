import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingTwo = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                setLoading(false);
                setData(res.data);
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
    })

    return (
        <div>
            <div style={{ textAlign: 'center' }}> {isLoading && <h4>Data is loading....</h4>}</div>
            {data && data.map(item => {
                return <h2 key={item.id}>{item.title}</h2>
            })}
        </div>
    )
}

export default DataFetchingTwo
