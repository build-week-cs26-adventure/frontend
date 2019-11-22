import React from 'react';

const PlayersInRoom = ({ gameDetail }) => {
  return (
    <div>
      <h3> Room</h3>
      <hr />
      {gameDetail.players &&
        gameDetail.players.map(player => <p key={player}>{player}</p>)}
    </div>
  );
};

export default PlayersInRoom;
