import { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { CartCountContext } from '../../routes/Routing';

export const Item = ({ item }) => {
  const itemId = useRef('');
  const itemTitle = useRef('');
  const itemPrice = useRef('');
  const itemThumb = useRef('');
  const { setCartCount } = useContext(CartCountContext);

  const handleCart = (e) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
    const items = JSON.stringify([...cart,
    {
      'id': itemId.current.id,
      'title': itemTitle.current.innerText,
      'price': itemPrice.current.getAttribute('data-price'),
      'image': itemThumb.current.src,
    }
    ]);

    localStorage.setItem('cart', items);

    const countCartItems = JSON.parse(localStorage.getItem('cart')).length;

    setCartCount(countCartItems);
  }

  const formatUSD = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Card className='p-3 border-0 bg-transparent'>
      <Card className='item__item border-0 py-3' id={`item_${item.id}`} ref={itemId}>
        <NavLink to={`/product/${item.id}`} className='text-decoration-none link-dark'>
          <Card.Header className='p-0 border-0 position-relative bg-white'>
            <Card.Text as='h4' className='m-0 ms-3 mt-3 item__price position-absolute'><Badge bg='info' className='fw-normal fw-semibold' ref={itemPrice} data-price={item.price}>{formatUSD.format(item.price)}</Badge></Card.Text>
            <Card.Img variant='top' className='cover rounded-3 img-thumbnail m-0 p-0' src={item.image_url} alt='' ref={itemThumb} />
          </Card.Header>
          <Card.Body className='pt-3 pb-0 px-0'>
            <Card.Title ref={itemTitle}>
              {item.name}
            </Card.Title>
            <Card.Text className='h-1'>
              {item.description}
            </Card.Text>
            <Row className='d-flex align-items-center'>
              <Col className='pe-0'>
                <Button onClick={handleCart} variant='outline-dark' className='rounded-pill'>Add to Cart</Button>
              </Col>
            </Row>
          </Card.Body>
        </NavLink>
      </Card>
    </Card>
  )
}
