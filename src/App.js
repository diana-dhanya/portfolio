
import './App.css';
import background from '../src/backgroundimg.jpeg';
import * as React from 'react';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

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
        <Button variant="contained" onClick={()=>window.open('https://reactjs.org', '_blank')} 
        style={{color:'black', backgroundColor:'#bdcfe1', borderRadius:50, fontFamily:'Futura'}}>
           
        </Button>
        &emsp;
        <Button variant="contained" onClick={()=>window.open('https://reactjs.org', '_blank')} 
        style={{color:'black', backgroundColor:'#bdcfe1', borderRadius:50, fontFamily:'Futura'}}>
          main 
        </Button>
      </div>
    </div>
  );
}

export default App;
