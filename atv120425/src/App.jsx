import { BrowserRouter } from 'react-router';
import React, { useState } from 'react';
import Routers from './componentes/routers';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Routers />
     </BrowserRouter>
    </>
  );
}

export default App;
