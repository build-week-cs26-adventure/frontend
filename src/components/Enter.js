import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import jake from '../assets/images/Adventure-Time-PNG-File.png'
const Enter = ({ history, setIsLoggedIn, setIsLoading }) => {
  return (
    <div>
      <h2>Login</h2>
      <Login
        setIsLoading={setIsLoading}
        setIsLoggedIn={setIsLoggedIn}
        history={history}
      />
      <hr></hr><img width='10%' src={jake}/>
      <h2>SignUp</h2>
      
      <SignUp
        setIsLoading={setIsLoading}
        setIsLoggedIn={setIsLoggedIn}
        history={history}
      />

    </div>
  );
};

export default Enter;
