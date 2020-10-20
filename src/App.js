import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Navigation } from './components/Navigation'
import { Slider } from './components/slider'
import { YoutubeVideo } from './components/youtubeVideo';
import { YoutubeVideoText } from './components/youtubeVideoText';
import { Rworks } from './components/rworks';
import { Rbear } from './components/rbear';
import { Rmorita } from './components/rmorita';
import { FormUser } from './components/formUser';
import { Jobs } from './components/jobs';
import './assets/css/App.css'


export const App = () => {
  return (
    <>
      <Navigation />
      <Slider />

      {/* Vídeo y texto */}
      <Container fluid>
        <Row>
          <Col xs={12} lg={6}>
            <YoutubeVideo />
          </Col>
          <Col xs={12} lg={6} className="text-center mt-4">
            <YoutubeVideoText />
          </Col>
        </Row>
      </Container>

      {/* Descanso */}
      <Container className = "rest">
        <Row>
          <Col xs = {12} lg = {4} className = "gray-container rest-container">
            <Rworks />
          </Col>
          <Col xs = {12} lg = {4} className = "gray-container rest-container">
            <Rbear />
          </Col>
          <Col xs = {12} lg = {4} className = "orange-container rest-container">
            <Rmorita />
          </Col>
        </Row>
      </Container>

      {/* Formulario y puestos disponibles */}
      <Container fluid>
        <Row>
          <Col xs={12} lg={6}>
            <FormUser />
          </Col>
          <Col xs={12} lg={6}>
            <Jobs />
          </Col>
        </Row>
      </Container>






































      
    </>
  )
}

