import { Item } from './Item'
import { Container, Spinner, Row } from 'react-bootstrap';
import { ResultsPagination } from './ResultsPagination';

export const Items = ({ data, loading }) => {

    // Loading spinner
    if (loading === true) {
        return (
            <Container className="d-flex align-items-center justify-content-center vh-100">
                <Spinner animation="border" />
            </Container>
        );
    }

    return (
        <>
            <Row xs={1} md={2} lg={3} gap={3} className='g-0 item__list'>
                {data.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </Row>

            {/*(data[0].total > 9) &&
                <ResultsPagination total={data.data[0].total} />
                */}
        </>
    )
}
