import React, { useContext } from 'react'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { ImagesCarousel } from '../layout/ImagesCarousel';
import { CartCountContext } from '../../routes/Routing';

export const ItemPage = () => {

  const { setCartCount } = useContext(CartCountContext);

  const { id } = useParams();

  const { data, loading } = useFetch(`?table=products&id=${id}`);

  // Loading spinner
  if (loading === true) {
    return (
      <Container className='d-flex align-items-center justify-content-center vh-100'>
        <Spinner animation='border' />
      </Container>
    );
  }

  const formatUSD = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', });

  const handleAddToCart = (e) => {

    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
    const items = JSON.stringify([...cart,
    {
      'id': `item_${data.id}`,
      'title': data.title,
      'price': data.price,
      'image': data.thumbnail,
    }
    ]);

    localStorage.setItem('cart', items);

    const countCartItems = JSON.parse(localStorage.getItem('cart')).length;

    setCartCount(countCartItems);
  }

  return (
    <Container>
      <Row className='pt-5 p-3'>
        <Col md={6}>
          <ImagesCarousel images={data.image_url} />
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
        <h5>About this product</h5>
        <p className='mb-2' style={{ whiteSpace: 'pre-line' }}>{data.description}</p>
      </Row>
    </Container>
  )
}
