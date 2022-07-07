import React from 'react';
import dragon from './images/favicon.ico';

export default function Home() {
  return (
    <div style={{textAlign: 'center'
    }}>
      <h1></h1>
      <a>
      <img src={dragon} height="500px" 
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
