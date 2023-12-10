import { Items } from '../layout/Items'
import { useFetch } from '../../hooks/useFetch'
import { useSearchParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

export const SearchPage = () => {
  const [params] = useSearchParams();

  const query = params.get('query') ?? '';
  const page = parseInt(params.get('page') ?? 1);

  let itemsUrl = `?table=products&limit=9&offset=${(page - 1) * 9}`;
  itemsUrl += (query !== '') ? `&query=${query}` : '';

  const data = useFetch(itemsUrl);

  return (
    <Container fluid='lg'>
      <Row>
        <Items data={data} />
      </Row>
    </Container>
  )
}
