import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const NotFoundPage = () => {
  return (
    <Container className='p-5'>
      <Col>
        <Row className='text-center text-info' >
          <h1 className='display-1 fw-bold'>
            404
          </h1>
        </Row>
        <Row className='text-center'>
          <h6>
            Oops! there's nothing here.
          </h6>
        </Row>
      </Col>
    </Container>
  )
}
