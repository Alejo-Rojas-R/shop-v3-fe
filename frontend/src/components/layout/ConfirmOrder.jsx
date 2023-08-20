import axios from 'axios';
import { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { OrderDialogContext } from '../../routes/Routing';
import { UserInfoContext } from '../../routes/Routing';
import { CartCountContext } from '../../routes/Routing';

export const ConfirmOrder = () => {
    const navigate = useNavigate(null);
    const { showDialog, setShowDialog } = useContext(OrderDialogContext);
    const { userInfo } = useContext(UserInfoContext);
    const { cartCount, setCartCount } = useContext(CartCountContext);

    const handleClose = () => {
        setShowDialog(false);
    };

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

            axios.post('http://localhost/imagineapps-challenge/api/?table=orders', JSON.stringify(order)).then(response => {
                return response.data
            }).then(data => {
                localStorage.removeItem('cart');
                setCartCount(0);
                setShowDialog(false);
                navigate('/Account');
            }).catch(error => {
                console.log(error);
            })
        })
    };

    return (
        <div>
            <Modal show={showDialog} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to order all the {cartCount} current items in the cart?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
