import { CategoriesList } from '../layout/CategoriesList';
import { SearchInput } from '../layout/SearchInput';
import { Stack, Container, Row, Col, Image } from 'react-bootstrap';
import { CategoryPreview } from '../layout/CategoryPreview';
import HeaderImage from '../../assets/online-shopping-clipart-md.png';

export const HomePage = () => {
    return (
        <>
            {/* Search bar */}
            <Container fluid='xl' className='p-4 bg-info bg-gradient rounded-3'>
                <Row className='align-items-center'>
                    <Col md className='w-100 mw-50 px-2 px-sm-5 pb-4 m-0 align-items-center'>
                        <h3 className='mb-3'>With the <b><span className='text-white'>e</span>Shop</b> you'll find a user-friendly interface and intuitive navigation that make finding your desired items effortless.</h3>
                        <p className=''>API RESTful backend was developed with the Spring framework.<br />
                            Code available in <a target='_blank' className='text-white link-underline link-underline-opacity-0' href='https://github.com/Alejo-Rojas-R/shop-v3-api'>Github</a></p>
                        <div className='w-75'>
                            <SearchInput collapsible={false} variant={'dark'} />
                        </div>
                    </Col>
                    <Col md className='d-flex justify-content-center'>
                        <Image fluid className='px-5' src={HeaderImage} />
                    </Col>
                </Row>
            </Container>

            {/* Categories List */}
            <Container fluid='lg' className='py-4'>
                <Row>
                    <Col>
                        <CategoryPreview category={1} />

                        {/* Categories List */}
                        <h4 className='px-3 m-0'>More Categories</h4>
                        <Stack direction='horizontal' className='d-flex flex-wrap justify-content-center py-3' gap={2}>
                            <CategoriesList badges={true} />
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
