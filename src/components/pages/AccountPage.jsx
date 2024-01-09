import { CloseSession } from '../layout/CloseSession';
import { useFetch } from '../../hooks/useFetch';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const AccountPage = () => {
    const currentUser = useSelector(state => state.user);
    const { response, loading, fetchData } = useFetch();
    const data = response?.data;

    useEffect(() => {
        fetchData('/orders/by-user', 'POST', { email: currentUser.email }, { headers: { 'Authorization': `Bearer ${currentUser.token}`, 'Content-Type': 'multipart/form-data' } });
    }, []);

    const formatUSD = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    // Loading spinner
    if (loading === true) {
        return (
            <Container className="d-flex align-items-center justify-content-center vh-100">
                <Spinner animation="border" />
            </Container>
        );
    }

    return (
        <Container fluid='lg px-4'>
            <Row>
                <CloseSession />
            </Row>
            <h3 className='pt-3'>Order History</h3>
            <Row className='py-3'>
                {data?.map((item, index) => {
                    return (
                        <Card key={index} className='mb-3 p-3 d-flex flex-row'>
                            <Col xs={10}>
                                <Card.Title>{item.product.name}</Card.Title>
                                <Card.Text as='div' className='d-flex flex-column'>
                                    <div>
                                        Quantity: {item.quantity}
                                    </div>
                                    <div>
                                        Price: {formatUSD.format(item.totalPrice)}
                                    </div>
                                    <div>
                                        Ordered at: {item.date}
                                    </div>
                                    <NavLink to={`/product/${item.product.id}`} className=''>
                                        <Button variant='link p-0 text-info'>
                                            View Product
                                        </Button>
                                    </NavLink>
                                </Card.Text>
                            </Col>
                            <Col xs={2} className='d-flex align-items-center justify-content-center'>
                                <Card.Img className='cover img-fluid w-50' src={item.product.imageUrl} alt='' />
                            </Col>
                        </Card>
                    )
                })
                }
            </Row>
        </Container>
    )
}
