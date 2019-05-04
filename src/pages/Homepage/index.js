import React, { Component, Fragment } from 'react';

import MediaQuery from 'react-responsive';

import Nav from '../../components/Nav';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Container, Row, Col } from 'reactstrap';

import './homepage.scss';




class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: ''
    };

    document.addEventListener('scroll', this.handleTouchStart);
    document.addEventListener('touchend', this.handleTouchEnd);

  }

  handleTouchStart = () => {
    this.setState({scrolling: 'scrolling'})
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {this.setState({scrolling: ''})}, 300);
  }

  handleTouchEnd = () => {
    this.setState({scrolling: ''});
  }

  render() {
    return (

      <Fragment>

      <MediaQuery query="(min-device-width: 1224px)">
        <Nav activeKey='/' />
      </MediaQuery>
      <div className='d-flex justify-content-center'>
          <Container>
                  <div className="row">
                      <p className='text-main'>
                          Hackathons coming soon.
                      </p>
                  </div>
                  <Row className='card-row'>
                        <Card className = "hack-card" style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/12049559_10153048358195988_6195809242732784095_n.png?_nc_cat=107&_nc_ht=scontent-syd2-1.xx&oh=b6e9335aeacfa0ceaa12f00098ec939a&oe=5D69F297" />
                          <Card.Body>
                            <Card.Title>Facebook Hackathon</Card.Title>

                            <Card.Text>
                              <text>Hackathons are a big tradition at Facebook. They serve as the foundation for some great (and not so great) ideas. It gives our employees the opportunity to try out new ideas and collaborate with other people in a fun environment.</text>
                            </Card.Text>

                            <div className = 'button'>
                              <Button variant="primary" href="https://www.facebook.com/hackathon/">Read more</Button>
                            </div>

                            <div className = 'button'>
                              <Button variant="primary" href="/search/92342-68722">Find teammates</Button>
                            </div>
                          </Card.Body>
                        </Card>

                  </Row>

                  <Row className='card-row'>

                        <Card className = "hack-card" style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F60263824%2F297198274436%2F1%2Foriginal.20190412-074944?w=800&auto=compress&rect=0%2C45%2C1594%2C797&s=85a858dbf7a4d784aaf70e48b3076a5b" />
                          <Card.Body>
                            <Card.Title>MEDHACK</Card.Title>
                            <Card.Text>
                              <text>Melbourne’s premier student run Healthcare Innovation hackathon. Every year, it brings students together at the intersection of design, engineering, healthcare and entrepreneurship in a 48 hour sprint to help reimagine the future of healthcare. </text>
                            </Card.Text>
                            <div className = 'button'>
                              <Button variant="primary" href="https://medhack.com.au">Read more</Button>
                            </div>
                            <div className = 'button'>
                              <Button variant="primary" href="/search/89246-438613">Find teammates</Button>
                            </div>
                          </Card.Body>
                        </Card>



                    </Row>
                    <Row className='card-row'>



                        <Card className = "hack-card" style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://imaginecup.microsoft.com/en-us/Image/SubscriptionProfile/12" />
                          <Card.Body>
                            <Card.Title>Imagine Cup</Card.Title>
                            <Card.Text>
                              <text>Imagine Cup is a global competition that empowers the next generation of computer science students to team up and use their creativity, passion and knowledge of technology to create applications that shape how we live, work and play. Every year tens of thousands of students from across the globe compete for cash, travel and prizes and for the honor of taking home the Imagine Cup!</text>
                            </Card.Text>
                            <div className = 'button'>
                              <Button variant="primary" href="https://imaginecup.microsoft.com">Read more</Button>
                            </div>
                            <div className = 'button'>
                              <Button variant="primary" href="/search/45872-278132">Find teammates</Button>
                            </div>
                          </Card.Body>
                        </Card>



                  </Row>

            </Container>

        </div>

        <MediaQuery query="(max-device-width: 1224px)">

          <footer className={"footer " + this.state.scrolling}>
            <Nav bottom activeKey='/' />
          </footer>
        </MediaQuery>
      </Fragment>

    );
  }
}


export default Homepage;
