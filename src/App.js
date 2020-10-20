import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Navigation } from './components/Navigation'
import { Slider } from './components/slider'
import { YoutubeVideo } from './components/youtubeVideo';
import { YoutubeVideoText } from './components/youtubeVideoText';
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

