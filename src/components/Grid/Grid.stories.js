import React from 'react'

import { Col, Container, Row } from '~/components'

export default {
  title: 'Grid',
};

export const fluid = () => {
  return (
    <Container fluid>
      <Row>
        <Col style={{ backgroundColor: '#EEE' }}>col</Col>
        <Col style={{ backgroundColor: '#DDD' }}>col</Col>
        <Col style={{ backgroundColor: '#EEE' }}>col</Col>
      </Row>
    </Container>
  );
};

export const noGutter = () => {
  return (
    <Container>
      <Row noGutter>
        <Col style={{ backgroundColor: '#EEE' }}>col</Col>
        <Col style={{ backgroundColor: '#DDD' }}>col</Col>
        <Col style={{ backgroundColor: '#EEE' }}>col</Col>
      </Row>
    </Container>
  );
};

export const col = () => {
  return (
    <Container>
      <Row>
        <Col style={{ backgroundColor: '#EEE' }}>col</Col>
        <Col style={{ backgroundColor: '#DDD' }}>col</Col>
        <Col style={{ backgroundColor: '#EEE' }}>col</Col>
      </Row>
    </Container>
  );
};

export const colSize = () => {
  return (
    <Container>
      <Row>
        <Col style={{ backgroundColor: '#EEE' }}>col</Col>
        <Col col={12} sm={10} md={8} lg={6} xl={4} style={{ backgroundColor: '#DDD' }}>col=12 sm=10 md=8 lg=6 xl=4</Col>
        <Col style={{ backgroundColor: '#EEE' }}>col</Col>
      </Row>
    </Container>
  );
};

export const responsive = () => {
  return (
    <Container>
      <Row>
        <Col col={12} md={4} lg={6} xl={4} style={{ backgroundColor: '#EEE' }}>responsive</Col>
        <Col col={12} md={4} lg={6} xl={4} style={{ backgroundColor: '#DDD' }}>responsive</Col>
        <Col col={12} md={4} lg={12} xl={4} style={{ backgroundColor: '#EEE' }}>responsive</Col>
      </Row>
    </Container>
  );
};
