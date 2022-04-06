import React from 'react';
import PropTypes from 'prop-types';

export function NavbarRight(props) {
  const { loggedIn } = props;

  return (
    <div className="nav-login">
      {loggedIn
        ? (
          <>
            <span>User</span>
            <span>Logout</span>
          </>
        )
        : (
          <div>Login</div>
        )}
    </div>
  );
}

NavbarRight.defaultProps = {
  loggedIn: false,
};

NavbarRight.propTypes = {
  loggedIn: PropTypes.bool,
};
