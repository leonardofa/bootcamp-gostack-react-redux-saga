import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GloblaStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes />
      <GloblaStyle />
    </BrowserRouter>
  );
}

export default App;
