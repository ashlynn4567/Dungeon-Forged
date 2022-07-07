import React from 'react';
import dragon from '../assets/logos/icon_transparent.png';

export default function Home() {
  return (
    <div style={{textAlign: 'center'
    }}>
      <a>
      <img alt="logo" src={dragon} height="500px" 
      style={{}}/>
      </a>

      <div style={{
        paddingTop: '40px',
        textAlign: 'center'}}>  

      <h4>
       Welcome to our dungeons and dragons character sheet creator!
      </h4>
      </div>
    </div>
  );
}
