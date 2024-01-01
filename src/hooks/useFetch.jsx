import { useEffect, useState } from 'react';
import { api } from '../apiEndPoint';

export const useFetch = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setResponse(null);
        setLoading(true);
        setError(null);
    }, []);

    const fetchData = async (url, method, body = null, config = {}) => {
        try {
            setLoading(true);
            let result = null;

            switch (method) {
                case 'POST':
                    result = await api.post(url, body, config);
                    break;
                case 'PUT':
                    result = await api.put(url, body);
                    break;
                case 'DELETE':
                    result = await api.delete(url);
                    break;
                default:
                    // GET by default
                    result = await api.get(url);
                    break;
            }

            setResponse(result);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    return { response, loading, error, fetchData };
};