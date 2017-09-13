import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFoo } from 'actions/foo';

class Foo extends Component {
  static propTypes = {
    foos: PropTypes.array,
    actions: PropTypes.object,
  };

  addFoo = () => {
    const { actions } = this.props;
    return actions.addFoo();
  }

  render () {
    const Foos = () => (
      <div>
        {this.props.foos.map((foo, key) => (
          <div key={key}>{foo}</div>
        ))}
      </div>
    );

    return (
      <div>
        <h2>Foo</h2>
        <button onClick={this.addFoo}>Add Foo</button>
        <Foos />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foos: state.foo.foos,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ addFoo }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Foo);
