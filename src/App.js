import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './App.css';

const USER_SERVICE_URL = 'https://plantsdb.xyz/search?limit=10';


function App() {
  const [error, setErrors] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [plants, setPlants] = useState({ myPlants: [] });

  const fetchData = async () => {
    const result = await fetch(USER_SERVICE_URL)
      .then(result => result.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPlants({ myPlants: result.data });
        },

        (error) => {
          setIsLoaded(true);
          setErrors(error);
        }
      )
  }

  useEffect(() => {
    fetchData();
  }, []);

  

  // const [id] = data.hits.data;
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>

        {console.log(plants.myPlants.map(item => item))}

        <ul>
          {plants.myPlants.map((item) => 
            <li key={item.id}>
              {item.Scientific_Name_x}
              
              <ul>
                <li>
                  {`${item.Common_Name}` ? `Common Name: ${item.Common_Name}` : `Common Name: no common name`}
                </li>
                <li>
                  {`Genus: ${item.Genus}`}
                </li>
                <li>
                  {`Species: ${item.Species}`}
                </li>
                <li>
                  {item.Duration ? `Duration: ${item.Duration}` : `Duration: Unknown`}
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
