import { Items } from './Items';
import { useFetch } from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { useEffect } from 'react';

export const CategoryPreview = ({ category, customTitle = '' }) => {

    const { response, fetchData } = useFetch();

    const data = response?.data;

    useEffect(() => {
        fetchData(`/products/category/${category}?page=0&size=3`);
    }, []);

    if (!data) {
        return (
            <Container className='d-flex align-items-center justify-content-center mt-5'>
                No results
            </Container>
        );
    }

    return (
        <div className='pb-5'>
            <h4 className='px-3 m-0'>
                {(customTitle === '') ? (data && data[0].category.name) : customTitle}
            </h4>

            <div className='px-0'>
                <Items data={data} />
            </div>

            <div className='text-center'>
                <NavLink to={`/search?category=${category}`}>
                    <Button className='rounded-pill px-4' variant='dark'>More</Button>
                </NavLink>
            </div>
        </div>
    )
}