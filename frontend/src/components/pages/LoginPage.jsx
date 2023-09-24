import { useContext, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserInfoContext } from '../../routes/Routing';
import { api } from '../../apiEndPoint';

export const LoginPage = () => {
  const { setUserInfo } = useContext(UserInfoContext)
  const navigate = useNavigate();
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Handle form submission
    api.get('?table=users&validate_user=true', { params: formData }).then(response => {
      return response.data
    }).then(data => {
      if (!data) {
        setError('No user found with these credentials');
      } else {
        navigate('/');
        setUserInfo({ 'id': data.id, 'name': formData.email });
      }
    }).catch(error => {
      console.log(error.response.data.error)
    })
  };

  return (
    <Container className='p-3'>
      <Row className='justify-content-center'>
        <Col xs={12} sm={8} md={6}>
          <h4 className='mb-3'>Please login to set your order!</h4>
          <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3 justify-content-center'>

            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required />
              <Form.Text className='danger' muted>{error}</Form.Text>
            </Form.Group>

            <Container className='d-flex justify-content-between p-0'>
              <Button variant='primary' type='submit'>
                Login
              </Button>

              <Link to='/Register'>Register instead</Link>
            </Container>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};