import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  getIndex = () => {
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
        <button onClick={this.getIndex}>Get Content</button>
        { this.state.name && (
          <div className='content'>
            <h4>name: {name}</h4>
            <h4>description: {description}</h4>
            <h4>updated_at: {updated_at}</h4>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
