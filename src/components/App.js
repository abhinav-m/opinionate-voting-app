import React from 'react';

import Login from './Login';
import HeaderNavBar from './HeaderNavBar';

const App = () => (
  <div>
    <HeaderNavBar />
    <div className="formContainer">
      <Login />
    </div>
  </div>
);

export default App;
