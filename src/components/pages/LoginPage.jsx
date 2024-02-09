import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { response, loading, fetchData, error } = useFetch();

  useEffect(() => {
    if (error && error.data) {
      setErrorMessage(error.data.message);
    } else if (response && response.status === 200) {
      dispatch(setCurrentUser({ 'email': formData.email, 'token': response.data.token }));
      navigate('/account');
    }
  }, [response, dispatch, error]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData('/users/login', 'POST', formData);
  };

  return (
    <Container className='p-3'>
      <Row className='justify-content-center'>
        <Col xs={12} sm={8} md={6}>
          <h4 className='mb-3'>Please login to set your order!</h4>
          <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3 justify-content-center'>

            <Form.Group controlId='username'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' name='email' value={formData.username} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required />
              <Form.Text className='danger' muted>{errorMessage}</Form.Text>
            </Form.Group>

            <Container className='d-flex justify-content-between p-0'>
              <div className='d-flex gap-2 align-items-center'>
                <Button className='rounded-pill' variant='outline-info' type='submit'>
                  Login
                </Button>
                {loading && <Spinner size='sm' animation='border' variant='info' />}
              </div>

              <Link className='text-info' to='/Register'>Register instead</Link>
            </Container>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};