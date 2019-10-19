import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return (
    <div className="App">
      <UserList users={data} />
    </div>
  );
}

export default App;