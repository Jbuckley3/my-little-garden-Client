// MyPlants.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyPlants = ({ user }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/favorites/${user._id}`);
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [user]);

  return (
    <div className='favorites-list'>
      <h2>Your Favorites:</h2>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <li key={favorite.id}>{favorite.common_name}</li>
          ))
        ) : (
          <li>No favorites yet.</li>
        )}
      </ul>
    </div>
  );
};

export default MyPlants;
