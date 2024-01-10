import { useEffect, useState } from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

export const ImagesCarousel = ({ images }) => {

    const [activeImage, setActiveImage] = useState('');

    if (!Array.isArray(images)) {
        images = [images];
    }

    // Select default image on first render of the component
    useEffect(() => {
        setActiveImage(images[0]);
    }, [])

    const handleChangeImage = (event) => {
        setActiveImage(event.target.src);
    }

    return (
        <Container>
            <Row>
                <Col sm={12} className='text-center mb-4'>
                    <Image fluid className='rounded border border-2 border-light' src={activeImage} />
                    {/*images.map((item, index) => (
                        <Image fluid key={index} className={`rounded mb-2 border border-2 ${activeImage == item ? 'border-info' : 'border-light'}`} src={item} onClick={handleChangeImage} />
                    ))*/}
                </Col>
            </Row>
        </Container>
    )
}
