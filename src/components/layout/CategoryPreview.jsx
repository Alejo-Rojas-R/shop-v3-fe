import { Items } from './Items';
import { useFetch } from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';

export const CategoryPreview = ({ category, customTitle = '' }) => {

    const { response, fetchData } = useFetch();

    const data = response?.data;

    useEffect(() => {
        fetchData(`/products/category/${category}?page=0&size=3`);
    }, []);

    return (
        <div className='pb-5'>
            <h4 className='px-3 m-0'>
                <NavLink className='text-black link-underline link-underline-opacity-0 link-underline-opacity-100-hover' to={`/search?category=${category}`}>
                    {(customTitle === '') ? (data && data[0].category.name) : customTitle}
                </NavLink>
            </h4>

            <div className='px-0'>
                <Items data={data} />
            </div>

            <div className='text-center'>
                <NavLink to={`/search?category=${category}`}>
                    <Button className='rounded-pill px-4' variant='dark'>See More</Button>
                </NavLink>
            </div>
        </div>
    )
}