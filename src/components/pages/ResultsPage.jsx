import { Items } from '../layout/Items'
import { useFetch } from '../../hooks/useFetch'
import { useSearchParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';

export const ResultsPage = () => {
    const [params] = useSearchParams();

    const page = parseInt(params.get('page') ?? 1);

    const query = params.get('query') ?? '';
    const category = params.get('category') ?? '';

    let itemsUrl = '';
    itemsUrl = category ? `/products/category/${category}` // with "category" in the url
        : `/products/search/${query}`; // with "query" in the url

    itemsUrl += `?page=${(page - 1)}&size=9`;

    const { response, fetchData } = useFetch();

    const data = response?.data;

    useEffect(() => {
        fetchData(itemsUrl);
    }, [itemsUrl]);

    return (
        <Container fluid='lg'>
            <Row>
                {data ?
                    <Items data={data} />
                    :
                    <p>No results</p>
                }
            </Row>
        </Container>
    )
}
