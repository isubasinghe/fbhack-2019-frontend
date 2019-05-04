import React, { Component, Fragment } from 'react';
import { Card, Modal } from 'react-bootstrap';

import users from '../../data/users';

import profilePic from '../../profilepic.jpg';
import logo from '../../hackr.svg';

import { Container, Row, Col } from 'reactstrap';

import './profiles.scss';
class SwipeHolder extends Component {

  constructor(props) {
    super(props);
    // if(this.props.accepted === undefined) {
    //   this.props.accepted = [];
    // }
    // if(this.props.denied === undefined) {
    //   this.props.denied = [];
    // }
    this.elementRef = React.createRef();
    this.state = {
      currentX: 0,
      startX: 0,
      startTime: 0,
      endX: 0,
      endTime: 0,
      index: 0,
      showModal: false,
    }

  }

  componentDidMount() {

    console.log(this.elementRef);
    this.elementRef.addEventListener('touchstart', this.onTouchStart);
    this.elementRef.addEventListener('touchend', this.onTouchEnd);
    this.elementRef.addEventListener('touchmove', this.onTouchMove);

  }

  onTouchMove = (e) => {
    this.setState({currentX: e.touches[0].clientX});
  }

  onTouchStart = (e) => {
    //console.log(e);
    this.setState({startX: e.touches[0].clientX, startTime: e.timeStamp});

  }

  onTouchEnd = (e) => {

      console.log(e.touches.length > 0);
      this.setState({endX: e.changedTouches[0].clientX, endTime: e.timeStamp});
      console.log((this.state.endTime - this.state.startTime));
      if( (this.state.endTime - this.state.startTime) < 300) {
        if((this.state.endX-this.state.startX) > 0) {
          console.log('swipe right');
          this.handleRightSwipe();
        } else {
          console.log('swipe left');
          this.handleLeftSwipe();
        }
      }else {
        this.setState({currentX: 0, startX: 0});
      }

  }

  componentWillUnmount() {

  }

  resetState = () => {
    setTimeout(()=>{this.setState({currentX: 0, startX: 0})}, 300);
  }
  handleLeftSwipe() {
    let currIndex = this.state.index;

    this.setState({showModal: false, index: this.state.index+1});
    this.resetState();
  }

  handleRightSwipe() {
    let currIndex = this.state.index;

    this.setState({showModal: users[currIndex].match, index: this.state.index+1});
    
    this.resetState();
  }

  handleClose() {

  }

  render() {

    if(users.length-1 < this.state.index) {
      return (
        <div/>
      );
    }

    let modal = (
      <Modal show={this.state.showModal} onHide={()=>{this.setState({showModal: false})}}>
        <Modal.Header closeButton>
          <Modal.Title>It's a match</Modal.Title>
        </Modal.Header>
      </Modal>
    );
    console.log(users[this.state.index].match);
    console.log(this.state.showModal, "SHOW MODAL");
    return (

      <div ref={elem => this.elementRef = elem} className="swipeable-main">
        {(modal)}
        <div style={{position: 'absolute', left: this.state.currentX-this.state.startX, background: 'white', width: '100%'}} className="test">

          <Card>
            <Card.Body >
              <div className = "name">
                {users[this.state.index].name}
              </div>
            </Card.Body>
            <Container>
            <Card.Img className = "card-img-top" variant="top" src = {users[this.state.index].picURL}/>
              <div className = "desc">
                {users[this.state.index].description}
              </div>
              <Row>
              {users[this.state.index].skills.map((skill, index) => {

                return (
                  <Col xs="4">
                  <div className="skill" key={index}>
                    {skill.name}
                  </div>
                  </Col>
                );

              })}
              </Row>
              </Container>
          </Card>
        </div>
      </div>
    );
  }
}

class Profiles extends Component {
  render() {
    return (
      <Fragment>
        <SwipeHolder />
      </Fragment>
    );
  }
}

export default Profiles;