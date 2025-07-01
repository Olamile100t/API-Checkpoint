// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setListOfUser(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        👥 User Directory
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listOfUser.map(user => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600">{user.name}</h2>
            <p className="text-gray-700"><strong>Username:</strong> {user.username}</p>
            <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
            <p className="text-gray-700"><strong>Company:</strong> {user.company.name}</p>
            <p className="text-gray-700"><strong>Website:</strong> <a href={`https://${user.website}`} className="text-blue-500 underline" target="_blank" rel="noreferrer">{user.website}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
