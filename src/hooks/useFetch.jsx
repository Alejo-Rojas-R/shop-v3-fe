import { useState } from 'react';
import { api } from '../apiEndPoint';

export const useFetch = () => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    const fetchData = async (url, method = 'GET', body = null, config = {}) => {
        setLoading(true);

        try {
            const response = await api[method.toLowerCase()](url, body, config);
            setResponse(response);
            setError(null);
        } catch (error) {
            setError(error.response);
            setResponse(null);
        } finally {
            setLoading(false);
        }
    };

    return { response, loading, error, fetchData };
};