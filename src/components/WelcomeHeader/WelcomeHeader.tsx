import PropTypes from 'prop-types';
import React from 'react';
import './welcomeHeader.scss';

function WelcomeHeader(props): React.ReactElement {
  const { userInfo } = props;

  return (
    <h1 className='welcome-header'>
      Welcome back {userInfo.firstName} {userInfo.lastName}!
    </h1>
  );
}

WelcomeHeader.defaultProps = {
};

WelcomeHeader.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export { WelcomeHeader };
