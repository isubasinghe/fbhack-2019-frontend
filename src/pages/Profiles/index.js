import React, { Component, Fragment } from 'react';


const getUsers = () => {
  return [
    {
      name: 'Umair',
      skills: [

      ]
    },
    {
      name: 'Isitha',
      skills: [

      ]
    }
  ];
};


function withSwipable(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div/>
      );
    }
  }
}

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
    }
  
  }
  
  componentDidMount() {
 
    console.log(this.elementRef);
    document.addEventListener('touchstart', this.onTouchStart);
    document.addEventListener('touchend', this.onTouchEnd);
    document.addEventListener('touchmove', this.onTouchMove);
    
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
        } else {
          console.log('swipe left');
        }     
      }
    
  }

  componentWillUnmount() {

  }

  handleLeftSwipe() {

  }

  handleRightSwipe() {

  }

  render() {
    return (
      <div ref={this.elementRef} className="swipeable-main">
        <div style={{position: 'absolute', left: this.state.currentX-this.state.startX, background: 'white', width: '100%'}} className="test">
          Test
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