import React from 'react'
import { Col, Container, Row, Navbar } from 'react-bootstrap'
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
<<<<<<< HEAD
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
        <hr />
        <div className = "third-container">
          <Row>
            <Col xs={12} lg={3} className="rest-container orange">
              <Rworks />
            </Col>
            <Col xs={12} lg={3} className="rest-container gray">
              <Rbear />
            </Col>
            <Col xs={12} lg={3} className="rest-container orange">
              <Rmorita />
            </Col>
          </Row>
        </div>

        <hr />

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
=======
      <Container fluid>
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
      <hr />
      <Container className="rest">
        <Row>
          <Col xs={12} lg={4} className="rest-container orange">
            <Rworks />
          </Col>
          <Col xs={12} lg={4} className="rest-container gray">
            <Rbear />
          </Col>
          <Col xs={12} lg={4} className="rest-container orange">
            <Rmorita />
          </Col>
        </Row>
      </Container>
      <hr />

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
      <Navbar>
        <Navbar.Brand href="#home">
          RRSS
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hecho por <a href="">Ripley Tech</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      {/* src={require("../assets/img/dog.jpg")} */}




      
>>>>>>> 7b633569bd9db7e8ccd6666aa2de40c517758a9b
    </>
  );
};
