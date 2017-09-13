import React from 'react';
import PropTypes from 'prop-types';

import { Route, Link } from 'react-router-dom';

import Home from 'components/Home';
import Foo from 'components/FooContainer';

const Layout = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/foo">Foo</Link></li>
    </ul>

    <Route exact path="/" component={Home} />
    <Route path="/foo" component={Foo} />
  </div>
);

Layout.propTypes = {
  foos: PropTypes.array,
};

export default Layout;
