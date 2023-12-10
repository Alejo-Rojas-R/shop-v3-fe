import { useEffect, useState } from 'react'
import { api } from '../apiEndPoint';

export const useFetch = (url, method = "", body = {}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (method == "") {
            getData();
        } else if (method == "post") {
            postData();
        }
    }, [url]);

    const getData = async () => {
        setLoading(true);

        const response = await api.get(url);
        setData(response.data);

        setLoading(false);
    }

    const postData = async () => {
        setLoading(true);

        const response = await api.post(url, body);
        setData(response.data);

        setLoading(false);
    }

    return {
        data,
        loading
    }
}