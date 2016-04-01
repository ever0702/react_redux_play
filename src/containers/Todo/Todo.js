import React, {
  Component
}
from 'react';
import Helmet from 'react-helmet';

export default class Todo extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello TODO </h1>
        <Helmet title="About Us"/>
        THere you go
      </div>
    );
  }
}

