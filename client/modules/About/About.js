import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class About extends Component {
  render() {
    return (
      <div>
        <h2>It is a page about Us!</h2>
      </div>
    );
  }
}


/*
// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
    );
  }
}
*/

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
