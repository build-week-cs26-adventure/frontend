import React from 'react';

const LogOut = ({ logout }) => {
  return (
    <div style={{marginBottom:'10px'}}>

      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default LogOut;
