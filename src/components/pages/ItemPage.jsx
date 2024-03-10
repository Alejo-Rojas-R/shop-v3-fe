import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { ImagesCarousel } from '../layout/ImagesCarousel';
import { useEffect } from 'react';
import { CategoryPreview } from '../layout/CategoryPreview';
import { useDispatch } from 'react-redux';
import { setCart } from '../../redux/cartSlice';
import { Reviews } from '../layout/Reviews';

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
      <Row className='pt-5 pb-3'>
        <Col md={4}>
          <ImagesCarousel images={data.imageUrl} />
        </Col>
        <Col md={8} >
          <Container className='rounded bg-white'>
            <h1 className='mb-2'>{data.name}</h1>
            <div className='d-flex align-items-center'>
              <h3 className='me-2' data-price={data.price}>{formatUSD.format(data.price)}</h3>
            </div>
            <hr />
            <Row className='py-3'>
              <p className='mb-2' style={{ whiteSpace: 'pre-line' }}>{data.description}</p>
            </Row>
            <Button onClick={handleAddToCart} variant='outline-dark' className='rounded-pill'>Add to Cart <i className='bi bi-cart-plus'></i></Button>
          </Container>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Reviews reviews={data.review} />
      </Row>
      <Row className='mt-2'>
        <CategoryPreview category={data.category.id} customTitle='Related products' />
      </Row>
    </Container>
  )
}
