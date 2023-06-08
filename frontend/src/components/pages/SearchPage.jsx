import { Items } from '../layout/Items'
import { useFetch } from '../../hooks/useFetch'
import { useSearchParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { UserInfoContext } from '../../routes/Routing';
import { useContext } from 'react';
import { CloseSession } from '../layout/CloseSession';

export const SearchPage = () => {
  const [params] = useSearchParams();
  const { userInfo } = useContext(UserInfoContext);

  const query = params.get('query') ?? '';
  const page = parseInt(params.get('page') ?? 1);

  let itemsUrl = `http://localhost/imagineapps-challenge/api/?table=products&limit=9&offset=${(page - 1) * 9}`;
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
