import React from 'react';
import NextComponent from './NextComponent';
function App() {
  return (
        <p>
          This page is independent and rendered from App1
          <NextComponent/>
        </p>
  );
}

export default App;
