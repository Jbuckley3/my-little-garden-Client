import axios from 'axios';
import { useEffect, useState } from 'react';
import './PlantDetail.css'
import { useParams } from 'react-router-dom'
const API_KEY = process.env.REACT_APP_API_KEY;

export default function PlantDetail({user}) {
    const plantName = useParams();
    const [curPlant, setCurPlant] = useState(undefined)
    const [favorited, setFavorited] = useState(false)
    const [sunlight, setSunlight] = useState(' This plant requires less than 3 hours of direct sun per day. Shade plants may require anything from the indirect light found on the north side of the house to the deep shade found under evergreens. True shade plants, such as many ferns, can perish in too much sun. Filtered light, such as that found beneath a tree canopy, is a good setting for full shade plants. This type of light is referred to as dappled shade and offers many gardening opportunities.')
    const [cycle, setCycle] = useState('A perennial is a plant that lives more than two years and regrows each spring. While the blooms and leaves of perennials die back during winter, new growth arises the following spring with minimal work on your part.')

    useEffect(() => {
        const plantDetail = async () => {
            const detail = await axios.get(`https://perenual.com/api/species/details/${plantName.plantId}?key=${API_KEY}`)
            setCurPlant(detail.data)
            if (detail.data.sunlight[0].toLowerCase() === 'full sun') {
                setSunlight('This plant will require at least 6 hours of direct sun daily. Many full sun plants thrive under sunny skies from dawn to dusk, but others may need a bit of a break. If a plant is labeled heat or drought tolerant and full sun, it is a good bet it will tolerate even the most intense summer sun day in and day out.')
            } else if (detail.data.sunlight[0].toLowerCase() === 'part shade' || detail.data.sunlight[0].toLowerCase() === 'sun-part shade') {
                setSunlight('This plant will require between 3 and 6 hours of sun per day, but need protection from intense mid-day sun. By definition part sun and part shade are very similar, but there are subtle differences necessitating the use of these two terms rather than just one. Most plants requiring either part sun or part shade do well in filtered light for most of the day, or direct sun during the morning or afternoon. Keep in mind that several hours of afternoon sun are more intense and create more heat than morning sun.')
            }

            if (detail.data.cycle.toLowerCase() === 'biennial') {
                setCycle(`A biennial is a plant that require two years to complete their life cycle. First season growth results in a small rosette of leaves near the soil surface. During the second season's growth stem elongation, flowering and seed formation occur followed by the entire plant's death.`)
            } else if (detail.data.cycle.toLowerCase() === 'annual') {
                setCycle(`An annual is a plant that performs it's entire life cycle from seed to flower to seed within a single growing season. All roots, stems and leaves of the plant die annually. Only the dormant seed bridges the gap between one generation and the next.`)
            }
        }
        plantDetail().catch(console.error)
        
        }, [])

    useEffect(() => {
        if (curPlant && user) {
            user.favorites.forEach((f) => {
                if (curPlant.id === parseInt(f.plantId)) {
                    setFavorited(true)
                }
            })
        }
    }, [curPlant])

    const addToFavorites = () => {
        // Send a request to add the plant to favorites
        axios.post(`http://localhost:8000/add-to-favorites/${user._id}/${curPlant.common_name}/${curPlant.cycle}/${curPlant.watering}/${curPlant.sunlight}/${encodeURIComponent(curPlant.default_image.medium_url)}/${curPlant.id}`)
            .then(response => {
                console.log('Plant added to favorites:', response.data);
            })
            .catch(error => {
                console.error('Error adding plant to favorites:', error);
            });
        user.favorites.push({ plantId : curPlant.id })
        setFavorited(true)
    };

    return (
        <div className='main'>
            {curPlant &&
                <>    
                    <div className='plant-detail-body'>
                        <img src={curPlant.default_image.medium_url} alt='' />
                        <div className='body-text'>
                            <div className='text-head'>
                                <h1 className='bold'>{curPlant.common_name}</h1>
                                {user && (
                                    favorited ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="green" class="heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="heart" viewBox="0 0 16 16" onClick={addToFavorites}>
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
                            <div className='care-card'>
                                <h4 className='bold'>WATERING</h4>
                                <h6 className='bold'>{curPlant.watering.toUpperCase()}</h6>
                                <p>{curPlant.common_name} requires {curPlant.watering.toLowerCase()} watering to maintain healthy growth. Water the plant every {curPlant.watering_general_benchmark.value} {curPlant.watering_general_benchmark.unit} to promote healthy growth.</p>
                            </div>
                            <div className='care-card'>
                                <h4 className='bold'>SUNLIGHT</h4>
                                <h6 className='bold'>{curPlant.sunlight[0].toUpperCase()}</h6>
                                <p>{curPlant.common_name} grows best in {curPlant.sunlight[0].toLowerCase()}. {sunlight}</p>
                            </div>
                            <div className='care-card'>
                                <h4 className='bold'>CYCLE</h4>
                                <h6 className='bold'>{curPlant.cycle.toUpperCase()}</h6>
                                <p>{cycle}</p>
                            </div>
                        </div>
                        <div className='care-guide-secondary-grid'>
                            <div className='care-card'>
                                <h5 className='bold'>Pruning</h5>
                                <h6 className='bold'>{curPlant.pruning_count.amount} time {curPlant.pruning_count.interval}</h6>
                            </div>
                            <div className='care-card'>
                                {curPlant.indoor ?
                                    <>    
                                        <h5 className='bold'>Indoor</h5>
                                        <h6 className='bold'>Cozy up inside with a new friend</h6>
                                    </>
                                    :
                                    <>
                                        <h5 className='bold'>Outdoor</h5>
                                        <h6 className='bold'>Your new curb appeal</h6>
                                    </>
                                }
                            </div>
                            <div className='care-card'>
                                <h5 className='bold'>Hardiness Zone</h5>
                                <h6 className='bold'>Best for zones {curPlant.hardiness.min}-{curPlant.hardiness.max}</h6>
                            </div>
                            <div className='care-card'>
                                <h5 className='bold'>Care Level</h5>
                                <h6 className='bold'>{curPlant.care_level}</h6>
                            </div>
                        </div>
                    </div>
                </>
            }
        
        </div>
    );
}