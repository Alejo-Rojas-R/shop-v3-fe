import { useEffect, useState } from 'react'
import { api } from '../apiEndPoint';

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [url]);

    const getData = async () => {
        setLoading(true);
        
        const response = await api.get(url);
        setData(response.data);
        
        setLoading(false);
    }

    return {
        data,
        loading
    }
}