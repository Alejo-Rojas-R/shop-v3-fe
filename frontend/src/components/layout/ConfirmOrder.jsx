import axios from 'axios';
import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserInfoContext } from '../../routes/Routing';
import { CartCountContext } from '../../routes/Routing';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShow } from '../../redux/dialogSlice';
import { api } from '../../apiEndPoint';

export const ConfirmOrder = () => {
    const navigate = useNavigate(null);
    const { userInfo } = useContext(UserInfoContext);
    const { cartCount, setCartCount } = useContext(CartCountContext);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleShow())
    };

    const modalProperties = useSelector((state) => state.dialog);

    // Handle form submission
    const handleConfirm = () => {
        let items = JSON.parse(localStorage.getItem('cart'));

        items.map((item) => {
            const order = {
                user_id: userInfo.id,
                product_id: item.id.replace('item_', ''),
                total_price: item.price,
                quantity: 1,
            };

            api.post('?table=orders', JSON.stringify(order)).then(response => {
                return response.data
            }).then(data => {
                localStorage.removeItem('cart');
                setCartCount(0);
                dispatch(toggleShow())
                navigate('/Account');
            }).catch(error => {
                console.log(error);
            })
        })
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
