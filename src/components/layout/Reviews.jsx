import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Spinner } from 'react-bootstrap'
import { useFetch } from '../../hooks/useFetch'
import { useForm } from '../../hooks/useForm'
import { RatingStars } from './RatingStars'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Reviews = ({ reviews }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const { response, loading, fetchData, error } = useFetch();
  const currentUser = useSelector(state => state.user);
  const { id } = useParams();
  const { formData, handleChange } = useForm({
    description: '',
    score: '',
    date: Date.now(),
    idProduct: id,
  });

  const [rating, setRating] = useState(0); // State to store user's rating

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    handleChange({ target: { name: 'score', value: newRating } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData('reviews', 'POST', formData, { headers: { 'Authorization': `Bearer ${currentUser.token}` } });
  };

  // Loading spinner
  if (loading === true) {
    return (
      <Container className='d-flex align-items-center justify-content-center vh-100'>
        <Spinner animation='border' />
      </Container>
    );
  }

  return (
    <>
      <Container className='px-4'>
        {
          reviews.length === 0 ?
            <div>
              No reviews have been left yet for this item.
            </div>
            :
            reviews.map((review, key) => (
              <>
                <Container key={key}>
                  <div>User said:</div>
                  <div>{review.description}</div>
                  <RatingStars rating={review.score} readonly={true} showScore={false} />
                </Container>
                <hr />
              </>

            ))
        }
      </Container>
      {currentUser &&
        <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3 justify-content-center px-4 py-2'>
          <Form.Group controlId='description'>
            <Form.Label>Leave a review for this item!</Form.Label>
            <Form.Control as='textarea' type='text' name='description' value={formData.description} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId='score'>
            <Form.Label className='pe-2'>Score: </Form.Label>
            <RatingStars rating={rating} readonly={false} onRatingChange={handleRatingChange} />
          </Form.Group>

          <Container className='d-flex justify-content-between p-0 gap-2 align-items-center'>
            <Button className='rounded-pill px-4' variant='outline-info' type='submit'>
              Post
            </Button>
            {loading && <Spinner size='sm' animation='border' variant='info' />}
          </Container>
          <Form.Text className='danger' muted>{errorMessage}</Form.Text>
        </Form>
      }

    </>
  )
}
