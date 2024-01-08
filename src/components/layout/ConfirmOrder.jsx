import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShow } from '../../redux/dialogSlice';
import { setCart } from '../../redux/cartSlice';
import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

export const ConfirmOrder = () => {
    const navigate = useNavigate(null);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user);
    const { response, loading, fetchData } = useFetch();

    useEffect(() => {
        if (response && response.status === 200) {
            localStorage.removeItem('cart');
            dispatch(setCart())
            dispatch(toggleShow())
            navigate('/Account');
        } else if (response && response.error) {
            //setError(response.error);
        }
    }, [response, dispatch])

    const handleClose = () => {
        dispatch(toggleShow())
    };

    const modalProperties = useSelector((state) => state.dialog);

    // Handle form submission
    const handleConfirm = () => {

        let items = JSON.parse(localStorage.getItem('cart'));

        items.forEach(item => {
            const order = {
                quantity: 1,
                totalPrice: item.price,
                date: Date.now(),
                userEmail: currentUser.email,
                idProduct: item.id.replace('item_', ''),
            };

            fetchData('/orders', 'POST', order, { headers: { 'Authorization': `Bearer ${currentUser.token}` } });
        });
    };

    return (
        <Modal show={modalProperties.show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{modalProperties.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalProperties.body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleConfirm}>
                    Accept
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
