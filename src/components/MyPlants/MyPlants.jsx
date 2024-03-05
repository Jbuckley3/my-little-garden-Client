import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

function MyPlants() {
  const [favoritePlants, setFavoritePlants] = useState([]);

  useEffect(() => {
    // Fetch user's favorite plants 
    axios.get('/api/user/favorite-plants')
      .then(response => {
        setFavoritePlants(response.data);
      })
      .catch(error => {
        console.error('Error fetching favorite plants:', error);
      });
  }, []); 

  return (
    <div>
      <h2>My Favorite Plants</h2>
      <ul>
        {favoritePlants.map(plant => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyPlants;