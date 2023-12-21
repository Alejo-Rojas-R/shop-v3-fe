import { Button, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/userSlice';

export const CloseSession = () => {
    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setCurrentUser(null));
    };

    return (
        currentUser && <Container className='d-flex align-items-center'>Welcome {currentUser.name}! <Button variant='link p-1 text-black' onClick={handleLogout}>Logout</Button></Container>
    )
}
