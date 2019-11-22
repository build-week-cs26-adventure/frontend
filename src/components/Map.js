import React ,{useState,useEffect} from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

export default () => {
  //set map state
  const [map, setMap] = useState({});

  // make GET request to server
  const Map = () => {
    return axiosWithAuth()
      .get('http://muddyboi.herokuapp.com/api/adv/rooms')
      .then(res => {
       
      })
      .catch(err => {
        
      });
  };

useEffect(() => {
    Map();
  }, []);

  return (
    <div>
      <h3>Main Map </h3>
    </div>
  );
};
