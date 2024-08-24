import React, { useState } from 'react';
import UserInfo from './components/UserInfo';

function App() {
  const [user, setUser] = useState({ name: 'John Doe', age: 30 });

  const handleAgeChange = () => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  };

  return (
    <div>
      <h1>React Debugging Example</h1>
      <UserInfo user={user} onAgeChange={handleAgeChange} />
    </div>
  );
}

export default App;
