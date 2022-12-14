import { useEffect, useState } from "react";
import axios from "axios";


export const DataFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios(url)
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            })
    }, [url])
    return { isLoading, data, error }

}