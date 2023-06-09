import { NavLink } from 'react-router-dom';
import { SearchInput } from './SearchInput';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { CartButton } from './CartButton';
import { UserInfoContext } from '../../routes/Routing';
import { useContext } from 'react';

export const Header = () => {
    const { userInfo } = useContext(UserInfoContext);

    return (
        <Navbar expand='md' className='p-3' bg='white' variant='white'>
            <Container fluid>
                <Navbar.Brand>
                    <NavLink className='navbar-brand m-0 text-info font-weight-bold' to='/'>
                        <i className='bi bi-cart4'></i>
                        <span className='ps-2'><span className='text-black'>e</span>Shop</span>
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='navbar-nav' />
                <Navbar.Collapse id='navbar-nav'>
                    <Nav className='gap-md-3'>
                        <Nav.Link as={NavLink} to='/' className='text-dark link-underline link-underline-opacity-0'>
                            Home
                        </Nav.Link>

                        <Nav.Link as={NavLink} to={userInfo ? '/Account' : '/Login'} className='text-dark link-underline link-underline-opacity-0'>
                            Account
                        </Nav.Link>
                    </Nav>
                    <Container className='d-flex justify-content-md-end m-0 p-0'>
                        <SearchInput collapsible={false} />
                        <CartButton />
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
