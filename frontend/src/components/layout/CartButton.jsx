import { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Badge, Button, Card, Col, Offcanvas, Row } from 'react-bootstrap'
import { CartCountContext } from '../../routes/Routing';
import { UserInfoContext } from '../../routes/Routing';
import { ConfirmOrder } from './ConfirmOrder';
import { useDispatch } from 'react-redux';
import { setDialog, toggleShow } from '../../redux/dialogSlice';

export const CartButton = () => {
    const { cartCount, setCartCount } = useContext(CartCountContext);
    const { userInfo } = useContext(UserInfoContext);
    const [showSideBar, setShowSideBar] = useState(false);
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState({});
    const navigate = useNavigate(null);
    const dispatch = useDispatch();

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('cart'));

        let total = 0;
        items?.map((item) => {
            total += parseFloat(item.price);
        });

        setItems(items);
        setTotal(formatUSD.format(total));
    }, [cartCount]);

    const formatUSD = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const handleCart = () => {
        setShowSideBar(!showSideBar);
    }

    const handleRemove = (e, id) => {
        e.preventDefault();

        const removedItems = items.filter((item) => {
            return item.id != id
        }, id);

        setItems(removedItems);
        setCartCount(removedItems.length);
        localStorage.setItem('cart', JSON.stringify(removedItems));
    }

    const handleOrder = (e) => {
        if (cartCount === 0) {
            e.preventDefault();
        } else if (userInfo) {
            dispatch(setDialog({
                title: 'Confirm Order',
                body: `Are you sure you want to order all the ${cartCount} current items in the cart?`
            }))
            dispatch(toggleShow())
            setShowSideBar(false);
        } else {
            setShowSideBar(false);
            navigate('/Login');
        }
    }

    return (
        <>
            <Button variant='outline-info' className='position-relative ms-2 border-0 rounded-circle' onClick={handleCart}>
                <Badge pill className='bg-info position-absolute top-100 start-100 translate-middle m-0 px-2 py-1 w-3 border border-white border-2'>{cartCount}</Badge>
                <i className='bi bi-cart2'></i>
            </Button>

            <Offcanvas placement='end' show={showSideBar} onHide={handleCart}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Items in cart: {cartCount}</Offcanvas.Title>
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
                                    <Button onClick={(e) => { handleRemove(e, item.id) }} variant='dark' className='position-absolute bottom-0 end-0 m-2' ><i className='bi bi-trash-fill'></i></Button>
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
