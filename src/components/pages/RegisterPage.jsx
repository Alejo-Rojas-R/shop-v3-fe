import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/userSlice';
import { useFetch } from '../../hooks/useFetch';

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { response, loading, fetchData } = useFetch();
    const data = response?.data;
    const { formData, handleChange } = useForm({
        name: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    });

    useEffect(() => {
        if (response?.data) {
            navigate('/account');
            dispatch(setCurrentUser({ 'email': formData.email, 'token': response.data.token }))
        } else if (response?.error) {
            setError(response.error);
        }
    }, [response, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetchData('/users/signup', 'POST', formData);
    };

    return (
        <Container className='p-3'>
            <Row className='justify-content-center'>
                <Col xs={12} sm={8} md={6}>
                    <h4 className='mb-3'>Please register to set your order!</h4>
                    <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3 justify-content-center'>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' name='name' value={formData.name} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId='lastName'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' name='lastName' value={formData.lastName} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId='address'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type='text' name='address' value={formData.address} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId='phone'>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type='tel' name='phone' value={formData.phone} onChange={handleChange} required />
                        </Form.Group>
                        <Container className='d-flex justify-content-between p-0'>
                            <Button variant='primary' type='submit'>
                                Register
                            </Button>

                            <Link to='/Login'>Login instead</Link>
                        </Container>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
