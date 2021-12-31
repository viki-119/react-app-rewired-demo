import React, { PureComponent } from 'react';
import './style.less';
// import PropTypes from 'prop-types';

export default class Empty extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return <div>demo</div>;
  }
}

Empty.propTypes = {
  // title?: PropTypes.string,
};
