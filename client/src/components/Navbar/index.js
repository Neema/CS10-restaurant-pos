import React from 'react';
import PropTypes from 'prop-types';

import * as s from './styles';

class Navbar extends React.Component {
  render() {
    return (
      <s.Navbar modalIsOpen={this.props.modalIsOpen}>
        <s.StyledLink to="/login-employee">(Employee Login DO NOT USE)</s.StyledLink>
        <s.StyledLink to="/login">(Admin Login)</s.StyledLink>
        <s.StyledLink to="/register">(Register)</s.StyledLink>
        <s.StyledLink to="/restaurant/sign-up">(Restaurant)</s.StyledLink>
        <s.StyledLink to="/new-employee">(New Employee)</s.StyledLink>
        <s.StyledLink to="/test">(TEST PAGE)</s.StyledLink>
        <s.StyledLink to="/tables">(Tables)</s.StyledLink>
        <s.StyledLink to="/party">(Party)</s.StyledLink>
        <s.StyledLink to="/servers">(Servers)</s.StyledLink>
        <s.StyledLink to="/settings">(Settings)</s.StyledLink>
      </s.Navbar>
    );
  }
}

Navbar.propTypes = {
  modalIsOpen: PropTypes.bool
};

Navbar.defaultProps = {
  modalIsOpen: false
};

export default Navbar;
