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
import { Footer } from './components/footer';
import './assets/css/App.css'


export const App = () => {
  return (
    <>
      <Navigation />
      <Slider />

      {/* Vídeo y texto */}
      <Container fluid className = "second-container">
        <Row className="justify-content-md-center">
          <Col xs={12} lg={5}>
            <YoutubeVideo />
          </Col>
          <Col xs={12} lg={5} className="text-center mt-4">
            <YoutubeVideoText />
          </Col>
        </Row>
      </Container>

      {/* Descanso */}
      <div className = "third-container">
        <Row>
          <Col xs={12} lg={3} className="rest-container gray">
            <Rworks />
          </Col>
          <Col xs={12} lg={3} className="rest-container gray">
            <Rbear />
          </Col>
          <Col xs={12} lg={3} className="rest-container gray">
            <Rmorita />
          </Col>
        </Row>
      </div>

      {/* Formulario y puestos disponibles */}
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} lg={5}>
            <FormUser />
          </Col>
          <Col xs={12} lg={5}>
            <Jobs />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
      
    </>
  );
};
