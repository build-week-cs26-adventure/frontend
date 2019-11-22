import React from 'react';

const Player = ({ gameDetail }) => {
  return (
    <div>
      <h3>{gameDetail.name}</h3>
      <hr />
    </div>
  );
};

export default Player;
