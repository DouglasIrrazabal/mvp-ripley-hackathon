import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Navigation } from './components/Navigation'
import { Slider } from './components/slider'
import { YoutubeVideo } from './components/youtubeVideo';
import { YoutubeVideoText } from './components/youtubeVideoText';
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







































      
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <a class="navbar-brand" href="#">Logo Ripley</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto mr-4">
            <li class="nav-item active">
              <a class="nav-link" href="#">Sección 1<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sección 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sección 3</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sección 4</a>
            </li>
          </ul>
        </div>

      </nav>

      <div className="container-fluid">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique, orci a eleifend dignissim, eros mauris euismod lorem, eu ornare metus ante porttitor lacus. Pellentesque auctor diam non velit congue, a convallis purus fringilla. Quisque at dapibus elit. Etiam congue ante non ante fringilla, quis venenatis quam cursus. Etiam facilisis turpis ac mi convallis varius. Vivamus bibendum hendrerit elit, non commodo lectus iaculis dapibus. Ut elementum mauris vel ligula consequat facilisis. Nunc in orci nec lectus facilisis tempus at in eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eleifend aliquam leo vel hendrerit. Fusce interdum aliquet pellentesque.
          Suspendisse tellus eros, scelerisque efficitur lobortis in, tincidunt sit amet libero. Donec ut mauris nisl. Praesent fringilla arcu non vestibulum venenatis. Nam venenatis eros eu dolor lobortis mollis. Proin viverra suscipit nunc id sodales. Suspendisse tristique lorem sit amet est egestas, at laoreet nisl ultrices. Sed mollis luctus diam eu mattis. Suspendisse tellus dui, dapibus ac vestibulum sit amet, dapibus gravida turpis. Nunc congue eleifend orci, eu imperdiet dui pulvinar at. Praesent at augue pretium, viverra ante quis, pellentesque tellus. Curabitur fringilla eget diam ut euismod. Nunc sit amet sapien tellus. Duis quis sollicitudin magna, et efficitur est. Morbi nunc felis, molestie et scelerisque vitae, ultricies at purus. Sed non vehicula velit. Morbi quis ipsum efficitur massa efficitur maximus et a odio.
          Donec posuere aliquam ligula, eu pulvinar ipsum lacinia lacinia. Nulla facilisi. Donec quis cursus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices ligula ligula, sit amet pharetra ex vestibulum id. Sed lacinia interdum consectetur. Proin ac porttitor enim, vitae vehicula purus. Cras dapibus aliquet sapien at egestas. Aliquam ultrices tincidunt turpis in elementum. Aenean id orci fermentum, ultricies nibh sed, viverra eros. Nullam sit amet tortor vel justo consequat accumsan. Fusce elementum mollis ante non cursus. Donec a lectus a nunc posuere auctor. Morbi egestas lobortis metus, in dictum mi dictum ultricies. Curabitur finibus, orci in bibendum blandit, dui orci dictum turpis, sed auctor ipsum velit eu massa.
          Nullam blandit velit ut libero iaculis, sed bibendum erat congue. Vivamus faucibus, elit quis hendrerit scelerisque, justo justo congue ex, sed gravida libero ex at lectus. Donec egestas sapien eget fringilla gravida. Quisque tempus ante dignissim tempor cursus. Cras commodo ultricies tincidunt. In hac habitasse platea dictumst. Phasellus quis dui ipsum. Aliquam erat volutpat. Proin mattis lorem diam. Sed sed felis sollicitudin, suscipit mauris quis, blandit orci. Praesent eleifend rutrum risus, vel eleifend dolor. Suspendisse tincidunt purus in dolor interdum ultrices.
          Donec elementum augue ut purus dignissim tempus. In a ex tincidunt, semper elit at, elementum sem. Quisque a mauris velit. Curabitur eget commodo lorem, ut gravida quam. Proin imperdiet luctus quam eu elementum. Suspendisse tristique sit amet tellus sit amet sagittis. Sed vehicula non tellus vel porta.
        </p>
      </div> */}
    </>
  )
}

