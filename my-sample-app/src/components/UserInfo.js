import React from 'react';

function UserInfo({ user, onAgeChange }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={onAgeChange}>Increase Age</button>
    </div>
  );
}

export default UserInfo;
