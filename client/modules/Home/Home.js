
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello world!</h2>
      </div>
    );
  }
}





/*

// Import Style
import styles from './Home.css';



class Home extends Component {
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

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
