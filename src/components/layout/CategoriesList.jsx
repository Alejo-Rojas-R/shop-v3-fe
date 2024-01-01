/* Categories List shown at the left of the page */
import { NavLink, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Container, Spinner, NavDropdown } from 'react-bootstrap';
import { useEffect } from 'react';

export const CategoriesList = ({ variant }) => {

    // Get categories to be shown as badges below the search input
    const { response, loading, fetchData } = useFetch();
    const [params] = useSearchParams();
    const category = params.get('category') ?? '';
    const data = response?.data;

    let links = '';

    useEffect(() => {
        fetchData('/categories');
    }, []);

    if (loading) {
        return (
            <Container className='d-flex align-items-center justify-content-center mt-5'>
                <Spinner animation='border' />
            </Container>
        );
    }

    switch (variant) {
        case 'dropdown':
            links = data.map((item, index) => (
                <NavDropdown.Item
                    key={index}
                    as={NavLink}
                    to={`/search?category=${item.id}`}
                    className={`text-dark link-underline link-underline-opacity-0 bg-dark-hover ${(category === item.id) ? 'bg-info' : 'bg-white'}`}>

                    {item.name}
                </NavDropdown.Item>
            ))
            break;
        default:
            links = data.map((item, index) => (
                <NavLink key={index} to={`/search?category=${item.id}`} className='text-dark link-underline link-underline-opacity-0 link-underline-opacity-50-hover'>
                    {item.name}
                </NavLink>
            ));
            break;
    }

    return (links);
}