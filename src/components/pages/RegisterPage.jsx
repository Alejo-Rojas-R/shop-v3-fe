import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/userSlice';
import { useFetch } from '../../hooks/useFetch';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { response, loading, fetchData, error } = useFetch();
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
    if (error && error.data) {
      setErrorMessage(error.data.message);
    } else if (response && response.status === 200) {
      dispatch(setCurrentUser({ 'email': formData.email, 'token': response.data.token }))
      navigate('/account');
    }
  }, [response, dispatch, error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData('/users/signup', 'POST', formData);
  };

  return (
    <Container className='p-3'>
      <Row className='justify-content-center'>
        <Col xs={12} sm={8} md={6}>
          <h4 className='mb-3'>Create Account</h4>
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
              <div className='d-flex gap-2 align-items-center'>
                <Button className='rounded-pill' variant='outline-info' type='submit'>
                  Register
                </Button>
                {loading && <Spinner size='sm' animation='border' variant='info' />}
              </div>

              <Link className='text-info' to='/Login'>Login instead</Link>
            </Container>
            <Form.Text className='danger' muted>{errorMessage}</Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
