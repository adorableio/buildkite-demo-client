import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    updated_at: PropTypes.string,
  };

  componentWillMount () {
    return axios.get('http://localhost:3002/index')
    .then((response) => {
      this.setState({ ...response.data });
    });
  }

  render () {
    const { name, description, updated_at } = this.state;
    return (
      <div>
        <h2>Home</h2>
        <div className='content'>
          <h4>name: {name}</h4>
          <h4>description: {description}</h4>
          <h4>updated_at: {updated_at}</h4>
        </div>
      </div>
    );
  }
}

export default Home;
