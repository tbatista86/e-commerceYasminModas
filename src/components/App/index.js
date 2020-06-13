import React from 'react';

import Layout from '../../layout';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
