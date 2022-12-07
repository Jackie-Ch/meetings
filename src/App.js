import React, { useState, useEffect } from 'react';
import Users from './components/Users';
import api from './api';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(api.users.fetchAll());
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => (userId !== user._id ? user : '')));
  };

  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  return (
    <Users
      users={users}
      onDelete={handleDelete}
      onToggleBookmark={(id) => handleToggleBookmark(id, console.log(id))}
    />
  );
}

export default App;
