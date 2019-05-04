import React, { Component, Fragment } from 'react';
import Cards, { Card } from 'react-swipe-card';

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

class Profiles extends Component {
  render() {
    return (
      <Fragment>
        <Cards >
          
        </Cards>
      </Fragment>
    );
  }
}

export default Profiles;