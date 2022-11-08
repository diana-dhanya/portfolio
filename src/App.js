
import './App.css';
import React from 'react';
import background from '../src/backgroundimg.jpeg';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height:'100vh',
      width:'100vw',
      margin: '0px',
    }}>
      Hello World
    </div>
  );
}

export default App;
