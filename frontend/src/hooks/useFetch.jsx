import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [url]);

    const getData = async () => {
        setLoading(true);

        const response = await axios.get(url);
        setData(response.data);
        
        setLoading(false);
    }

    return {
        data,
        loading
    }
}