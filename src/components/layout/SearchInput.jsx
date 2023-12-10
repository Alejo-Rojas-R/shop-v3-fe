import { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const SearchInput = ({collapsible = true, variant='outline-info'}) => {

    const [query, setQuery] = useState('');
    const [toggleBar, setToggleBar] = useState(true);
    const refQueryInput = useRef();
    const navigate = useNavigate(null);

    const handleWriteSearch = () => {
        setQuery(refQueryInput.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query === '') {
            handleToggleBar();
            return true;
        }

        navigate(`/search?query=${query}`);

        setToggleBar(true);
        setQuery('');
    }

    const handleToggleBar = () => {
        setToggleBar(!toggleBar);
    }

    return (
        <Form onSubmit={handleSubmit} className='d-flex justify-content-center'>
            <Form.Control className={`me-2 shadow-none rounded-pill ${(toggleBar && collapsible) ? 'search-bar--hide border-0 p-0' : ''}`} placeholder='Search' value={query} ref={refQueryInput} onChange={handleWriteSearch} />
            <Button type='submit' variant={variant} className='border-0 rounded-circle' to={`/search?query=${query}`}>
                <i className='bi bi-search' />
            </Button>
        </Form>
    )
}
