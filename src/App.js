
import './App.css';
import background from '../src/backgroundimg.jpeg';
import * as React from 'react';
import { Button } from '@mui/material';
//import Button from '@mui/material/Button';

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
      <div style={{fontSize: '50px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <Button variant="contained" onClick={()=>window.open('https://reactjs.org', '_blank')}>
          Click Me
        </Button>
      </div>
    </div>
  );
}

export default App;
