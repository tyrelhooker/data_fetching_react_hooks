import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({ hits: [] });
  return (
    <ul>
      {data.hits.map(item => {
        <li key={item.objectId}>
          <a href={item.url}>{item.title}</a>
        </li>
      })}
    </ul>
  );
}

export default App;
