import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data,newData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(rep => {
        newData(rep.data);
      })
  },[]);

  return (
    <div>
      <h1>The data is :</h1>

      {data.map(info => (
        <div>
          <h2>{info.id}. {info.title}</h2>
          <p>{info.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
