import React, { Component, Fragment } from 'react';

import { Card, ProgressBar } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import Nav from '../../components/Nav';

import profilePic from '../../profilepic.jpg';

import './profile.scss';

const getSkills = () => {
  return [
    {name: 'C', prof: 92},
    {name: 'C++', prof: 90}, 
    {name: 'Java', prof: 80}, 
    {name: 'Python', prof: 85}, 
    {name: 'NodeJs', prof: 80}, 
    {name: 'AWS', prof: 70}, 
    {name: 'Kubernetes', prof: 65}
  ];
};

const getDetails = () => {
  return {
    name: 'Umar',
    description: ''
  }
};
class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skills: getSkills(),
    };
  }
  render() {
    return (
      <Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <Nav activeKey='/myprofile' />
        </MediaQuery>
        <img className='profile-pic' src={profilePic} />
        {this.state.skills.map((skill, index) => {
          if(index > 5) {
            return (
              <div key={index}/>
            );
          }
          return (
            <div key={index} className="d-flex justify-content-center">
              <Card className="cards" >
                <Card.Body>
                  {skill.name}
                </Card.Body>

                <ProgressBar now={skill.prof} />

              </Card>
            </div>
          );
        })}
        <MediaQuery query="(max-device-width: 1224px)">
          <Nav activeKey='/myprofile' />
        </MediaQuery>
      </Fragment>
     
      
    );
  }
}

export default Profile;