/*
 * To create a component we need a 5 step process.
 * 
 */

// 1. import React and ReactDom
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2. id="root" index.html ami reference lak tur
const topEl = document.getElementById('root');

// 3. A chunga mi hi React nen assign tur
const root = ReactDOM.createRoot(topEl);

// 4. Component siam
function App(){

  let message = 'Hi there, you lucky Cow'; 
  const secondMessage = 123; // hetah hian boolean, null , undefined leh object a hman theihloh

  return <h1>{message} {secondMessage}</h1>

}

// 5. Component display
root.render(<App />);
