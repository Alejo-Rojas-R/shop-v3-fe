import { useContext } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserInfoContext } from '../../routes/Routing';
import { useForm } from '../../hooks/useForm';
import { api } from '../../apiEndPoint';

export const RegisterPage = () => {

    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useContext(UserInfoContext)

    const { formData, handleChange } = useForm({
        name: '',
        last_name: '',
        email: '',
        password: '',
        type: '',
        address: '',
        phone: '',
    });

    const handleSubmit = (e) => {

        // TODO: Handle form submission
        api.post('?table=users', JSON.stringify(formData)).then(response => {
            return response.data;
        }).then(data => {
            navigate('/');
            //setUserInfo({ 'id': data.id, 'name': formData.name });
        }).catch(error => {
            console.log(error);
        })
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

                        <Form.Group controlId='last_name'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' name='last_name' value={formData.last_name} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId='type'>
                            <Form.Label>Type</Form.Label>
                            <Form.Control as='select' name='type' value={formData.type} onChange={handleChange} required >
                                <option value=''>Select Type</option>
                                <option value='seller'>Seller</option>
                                <option value='costumer'>Costumer</option>
                            </Form.Control>
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
