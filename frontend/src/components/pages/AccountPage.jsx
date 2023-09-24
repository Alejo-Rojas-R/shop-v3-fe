import React, { useEffect, useState } from 'react'
import { CloseSession } from '../layout/CloseSession';
import { useFetch } from '../../hooks/useFetch';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserInfoContext } from '../../routes/Routing';
import { useContext } from 'react';

export const AccountPage = () => {
    const { userInfo } = useContext(UserInfoContext);
    const { data, loading } = useFetch(`?table=orders&id=${userInfo.id}`);

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
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text className='d-flex flex-column'>
                                    <div className='text-truncate'>
                                        {item.description}
                                    </div>
                                    <div>
                                        Price: {formatUSD.format(item.price)}
                                    </div>
                                    <div>
                                        Ordered at: {item.created_at}
                                    </div>
                                    <NavLink to={`/product/${item.id}`} className=''>
                                        <Button variant='link p-0 text-info'>
                                            View Product
                                        </Button>
                                    </NavLink>
                                </Card.Text>
                            </Col>
                            <Col xs={2} className='d-flex align-items-center justify-content-center'>
                                <Card.Img className='cover img-fluid w-50' src={item.image_url} alt='' />
                            </Col>
                        </Card>
                    )
                })
                }
            </Row>
        </Container>
    )
}
