import React from 'react';
import { WelcomeHeader } from '../components/WelcomeHeader';

function Dashboard(): React.ReactElement {
  const userInfo = { firstName: 'testing', lastName: 'this' };

  return (
    <div className='dashboard-page'>
      <WelcomeHeader userInfo={userInfo} />
    </div>
  );
}

export { Dashboard };
