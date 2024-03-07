import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PlantCard from '../PlantCard/PlantCard';

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
  }, []);

  return (
    <div className='favorites-list'>
      <h2>Your Favorites:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {favorites.length > 0 ? (
          favorites.map((favorite , idx) => (
            <PlantCard key={idx} plant={favorite} />
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyPlants;
