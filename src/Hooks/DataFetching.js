import React, { useEffect, useState } from 'react'

const DataFetching = () => {

    const [data, setData] = useState(null);
    const [isLodaing, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                return response.json()
            })
            .then((getData) => {
                setData(getData.slice(1, 10));
            })
    }, [])

    return (
        <div>
            {
                data && data.map((item) => {
                    return <p>Title: {item.title}</p>
                })
            }
            <br />
        </div>
    )
}

export default DataFetching
