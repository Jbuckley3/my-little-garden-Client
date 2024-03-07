import axios from 'axios';
import { useEffect, useState } from 'react';
import './PlantDetail.css'
import { useParams } from 'react-router-dom'
const API_KEY = process.env.REACT_APP_API_KEY;

export default function PlantDetail({user}) {
    const plantName = useParams();
    const [curPlant, setCurPlant] = useState(undefined)

    useEffect(() => {
        const plantDetail = async () => {
            const detail = await axios.get(`https://perenual.com/api/species/details/${plantName.plantId}?key=${API_KEY}`)
            setCurPlant(detail.data)
        }
        plantDetail().catch(console.error)
    }, [])

    const addToFavorites = () => {
        // Send a request to add the plant to favorites
        axios.post(`http://localhost:8000/add-to-favorites/${user._id}/${curPlant.id}`)
            .then(response => {
                console.log('Plant added to favorites:', response.data);
            })
            .catch(error => {
                console.error('Error adding plant to favorites:', error);
            });
    };

    return (
        <div className='main'>
            {curPlant &&
                <>    
                    <div className='plant-detail-body'>
                        <img src={curPlant.default_image.medium_url} alt='' />
                        <div className='body-text'>
                            <div className='text-head'>
                                <h1>{curPlant.common_name}</h1>
                                {user && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="empty-heart" viewBox="0 0 16 16" onClick={addToFavorites}>
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                    </svg>
                                )}
                            </div>
                            <p>{curPlant.description}</p>
                        </div>
                    </div>
                    <div className='care-guide'>
                        <h1>Care Guide</h1>
                        <div className='care-guide-grid'>
                            <div>
                                <h3>Watering</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae magnam libero rem praesentium voluptatibus nisi dolorem sint blanditiis, excepturi eos 
                                    quis. Et maxime hic atque! Eaque ducimus animi illo consequuntur?</p>
                            </div>
                            <div>
                                <h3>Sunlight</h3>
                            </div>
                            <div>
                                <h3>Pruning</h3>
                            </div>
                        </div>
                    </div>
                </>
            }
        
        </div>
    );
}