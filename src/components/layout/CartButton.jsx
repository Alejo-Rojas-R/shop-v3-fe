import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Badge, Button, Card, Col, Offcanvas, Row } from 'react-bootstrap'
import { ConfirmOrder } from './ConfirmOrder';
import { useSelector, useDispatch } from 'react-redux';
import { setDialog, toggleShow } from '../../redux/dialogSlice';
import { setCart } from '../../redux/cartSlice';

export const CartButton = () => {

    const [showSideBar, setShowSideBar] = useState(false);
    const navigate = useNavigate(null);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user);
    const { items, total, count } = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(setCart())
    }, []);

    const handleCartVisibility = () => {
        setShowSideBar(!showSideBar);
    }

    const handleRemoveItem = (e, id) => {
        e.preventDefault();

        const removedItems = items.filter((item) => {
            return item.id !== id
        }, id);

        localStorage.setItem('cart', JSON.stringify(removedItems));
        dispatch(setCart())
    }

    const handleOrder = (e) => {
        if (count === 0) {
            e.preventDefault();
        } else if (currentUser.token !== '') {
            dispatch(setDialog({
                title: 'Confirm Order',
                body: `Are you sure you want to order all the ${count} current items in the cart?`
            }))
            dispatch(toggleShow())
            setShowSideBar(false);
        } else {
            setShowSideBar(false);
            navigate('/Login');
        }
    }

    const formatUSD = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <>
            <Button variant='outline-info' className='position-relative ms-2 border-0 rounded-circle' onClick={handleCartVisibility}>
                <Badge pill className='bg-info position-absolute top-100 start-100 translate-middle m-0 px-2 py-1 w-3 border border-white border-2'>{count}</Badge>
                <i className='bi bi-cart2'></i>
            </Button>

            <Offcanvas placement='end' show={showSideBar} onHide={handleCartVisibility}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Items in cart: {count}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {items?.length > 0 && items.map((item, index) => {
                        return (
                            <Card key={index} className='item__item mb-3'>
                                <NavLink to={`/product/${item.id.replace('item_', '')}`} className='text-decoration-none link-dark'>
                                    <Row>
                                        <Col>
                                            <Card.Img className='cover' src={item.image} alt='' />
                                        </Col>
                                        <Col className='pt-3 ps-0'>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{formatUSD.format(item.price)}</Card.Text>
                                        </Col>
                                    </Row>
                                    <Button onClick={(e) => { handleRemoveItem(e, item.id) }} variant='dark' className='position-absolute bottom-0 end-0 m-2' ><i className='bi bi-trash-fill'></i></Button>
                                </NavLink>
                            </Card>
                        )
                    })
                    }

                </Offcanvas.Body>
                <Offcanvas.Title className='p-3 d-flex justify-content-between'>
                    <div>Total: {total}</div>
                    <Button variant='dark' onClick={handleOrder}>Order</Button>
                </Offcanvas.Title>
            </Offcanvas >
            <ConfirmOrder />
        </>
    )
}
