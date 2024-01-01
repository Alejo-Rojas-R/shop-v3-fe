import { NavLink } from 'react-router-dom';
import { SearchInput } from './SearchInput';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { CartButton } from './CartButton';
import { useSelector } from 'react-redux';

export const NavBar = () => {
    const currentUser = useSelector(state => state.user);

    return (
        <Navbar expand='md' className='p-3' bg='white' variant='white'>
            <Container fluid>
                <Navbar.Brand>
                    <Nav.Link as={NavLink} className='navbar-brand m-0 text-info font-weight-bold' to='/'>
                        <i className='bi bi-cart4' />
                        <span className='ps-2'><span className='text-black'>e</span>Shop</span>
                    </Nav.Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='navbar-nav' />
                <Navbar.Collapse id='navbar-nav'>
                    <Nav className='gap-md-3'>
                        <Nav.Link as={NavLink} to={currentUser ? '/Account' : '/Login'} className='text-dark link-underline link-underline-opacity-0'>
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
