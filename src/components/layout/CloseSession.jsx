import { Button, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

export const CloseSession = () => {
    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const { response, loading, fetchData } = useFetch();

    useEffect(() => {
        if (response?.status == 200) {
            navigate('/');
            dispatch(setCurrentUser(null));
        } else {
            setError(response?.statusText);
        }
    }, [response, dispatch])

    const handleLogout = () => {
        fetchData('/logout');
    };

    return (
        currentUser && <Container className='d-flex align-items-center'>Welcome back! {/*<Button variant='link p-1 text-black' onClick={handleLogout}>Logout</Button>*/}</Container>
    )
}
