import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { ImagesCarousel } from '../layout/ImagesCarousel';
import { useEffect } from 'react';
import { CategoryPreview } from '../layout/CategoryPreview';
import { useDispatch } from 'react-redux';
import { setCart } from '../../redux/cartSlice';

export const ItemPage = () => {
    const { id } = useParams();

    const { response, loading, fetchData } = useFetch();

    const { pathname } = useLocation();

    const data = response?.data;
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(`products/${id}`);
    }, [pathname]);

    // Loading spinner
    if (loading === true) {
        return (
            <Container className='d-flex align-items-center justify-content-center vh-100'>
                <Spinner animation='border' />
            </Container>
        );
    }

    if (!data) {
        return (
            <Container className='d-flex align-items-center justify-content-center mt-5'>
                No results
            </Container>
        );
    }

    const formatUSD = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const handleAddToCart = (e) => {
        e.preventDefault();

        const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
        const items = JSON.stringify([...cart,
        {
            'id': `item_${data.id}`,
            'title': data.name,
            'price': data.price,
            'image': data.imageUrl,
        }
        ]);

        localStorage.setItem('cart', items);
        dispatch(setCart());
    }

    return (
        <Container>
            <Row className='pt-5 p-3'>
                <Col md={6}>
                    <ImagesCarousel images={data.imageUrl} />
                </Col>
                <Col md={6} >
                    <Container className='rounded bg-white p-4'>
                        <h1 className='mb-2'>{data.name}</h1>
                        <hr />
                        <div className='d-flex align-items-center'>
                            <h3 className='me-2' data-price={data.price}>{formatUSD.format(data.price)}</h3>
                        </div>
                        <hr />
                        <Button onClick={handleAddToCart} variant='outline-dark' className='rounded-pill'>Add to Cart <i className='bi bi-cart-plus'></i></Button>
                    </Container>
                </Col>
            </Row>
            <Row className='p-3 pb-5'>
                <h5>Description</h5>
                <p className='mb-2' style={{ whiteSpace: 'pre-line' }}>{data.description}</p>
            </Row>

            <Row className='mt-2'>
                <CategoryPreview category={data.category.id} customTitle='Related products' />
            </Row>

        </Container>
    )
}
