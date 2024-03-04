import React from 'react'
import axios from 'axios'
import './PlantDetail.css'
import { useParams } from 'react-router-dom'

export default function PlantDetail() {
    let { plantId } = useParams(); // Destructure plantId from useParams()

    return (
        <div>
            <h1>PlantDetail</h1>
            <h3>{plantId}</h3>
        </div>
    );
}

export function PlantCard({ plant }) {
    const addToFavorites = () => {
        // Send a request to add the plant to favorites
        axios.post('/api/user/add-to-favorites', { plantId: plant.id })
            .then(response => {
                console.log('Plant added to favorites:', response.data);
            })
            .catch(error => {
                console.error('Error adding plant to favorites:', error);
            });
    };

    return (
        <div>
            <h3>{plant.name}</h3>
            {/* Other plant details */}
            <button onClick={addToFavorites}>Add to Favorites</button>
        </div>
    );
}
