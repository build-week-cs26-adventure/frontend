import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

import Player from './Player.js';
import MapDisplay from './MapDisplay';
import Input from './Input.js';
import PlayersInRoom from './PlayersInRoom.js';
import LogOut from './LogOut.js';
import Loading from './Loading.js';

const Game = ({ logout }) => {
  const [gameDetail, setGameDetail] = useState(null);
  const [direction, setDirection] = useState('');
  const [inputsComm, setinputsComm] = useState(null);

  const [loading, setLoading] = useState(false);

  const initGame = () => {
    return axiosWithAuth()
      .get('https://muddyboi.herokuapp.com/api/adv/init/')
      .then(res => {
        console.log(res.data);
        let roomObj = {
          type: 'room',
          text: `${res.data.description}`
        };
        setGameDetail(res.data);
        setinputsComm([roomObj]);
      })
      .catch(err => console.log(err));
  };

  const move = (e, moving) => {
    e.preventDefault();
    setLoading(true);
    const direction = { direction: `${moving}` };
    return axiosWithAuth()
      .post('https://muddyboi.herokuapp.com/api/adv/move/', direction)
      .then(res => {
        console.log(res);
        setGameDetail(res.data);
        setLoading(false);
        let moveObj = {
          type: 'move',
          text: `You walk ${
            moving === 'n'
              ? 'north'
              : moving === 's'
              ? 'south'
              : moving === 'w'
              ? 'west'
              : moving === 'e'
              ? 'east'
              : '... nowhere'
          }`
        };
        let roomObj = {
          type: 'room',
          text: `${res.data.description}`
        };
        setinputsComm([...inputsComm, moveObj, roomObj]);
        setDirection('');
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    initGame();
  }, []);
  if (gameDetail) {
    return (
      <div className="container">
        <div className="column side"><div className="LogOut">
            <LogOut logout={logout} />
          </div>
          <div className="inner-square map">
            <MapDisplay gameDetail={gameDetail} />
          </div> <div className="column side">
          <div className="inner-square players-online">
            <PlayersInRoom gameDetail={gameDetail} />
          </div>
          
        </div>
          <div className="inner-square player-Detail">
            <Player gameDetail={gameDetail} />
          </div>
        </div>
        <div className="column middle">
          <div className="inner-square game-Detail">
            {inputsComm &&
              inputsComm.map(move => {
                if (move.type === 'move') {
                  return <p className="move-Detail-text">{move.text}</p>;
                } else if (move.type === 'room') {
                  return <p className="room-Detail-text">{move.text}</p>;
                }
              })}
          </div>
          <div className="inner-square command-input">
            {loading ? (
              <Loading />
            ) : (
              <Input
                direction={direction}
                setDirection={setDirection}
                move={move}
              />
            )}
          </div>
        </div>
       
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Game;
