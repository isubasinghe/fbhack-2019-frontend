import React, { Component } from 'react';

import Nav from '../../components/Nav';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav activeKey="/search" />
    );
  }
}

export default Search;