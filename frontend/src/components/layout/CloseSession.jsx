import { useContext } from 'react'
import { Button, Container } from 'react-bootstrap';
import { UserInfoContext } from '../../routes/Routing';

export const CloseSession = () => {
    const { userInfo, setUserInfo } = useContext(UserInfoContext);

    const handleLogout = () => {
        setUserInfo(null);
    };

    return (
        userInfo && <Container className='d-flex align-items-center'>Welcome {userInfo.name}! <Button variant='link p-1 text-black' onClick={handleLogout}>Logout</Button></Container>
    )
}
