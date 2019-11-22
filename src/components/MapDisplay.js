import React from 'react';

import bmo from '../assets/images/bmo.gif';

const MapView = ({ gameDetail }) => {
  console.log(gameDetail)
  return (
    <div>
      <h3 style={{ color: '#710005' }}>{gameDetail.title}</h3>
      <p>
        <span style={{ color: '#710005' }}>Directions:</span> <br></br>n= North,
        <br></br>s= South,<br></br>w=West,<br></br>e=East
      </p>{' '}
      <p style={{ color: '#710005' }}>Items in room :</p>
      <img src={bmo} />
    </div>
  );
};

export default MapView;
