import axios from 'axios';
import { useEffect, useState } from 'react';
import './PlantDetail.css'
import { useParams } from 'react-router-dom'
const API_KEY = process.env.REACT_APP_API_KEY;

export default function PlantDetail() {
    const plantName = useParams();
    const [curPlant, setCurPlant] = useState(undefined)

    useEffect(() => {
        const plantDetail = async () => {
            const detail = await axios.get(`https://perenual.com/api/species/details/${plantName.plantId}?key=${API_KEY}`)
            setCurPlant(detail.data)
        }
        plantDetail().catch(console.error)
    }, [])

    return (
        <div className='main'>
            {curPlant &&
                <>    
                    <div className='plant-detail-body'>
                        <img src={curPlant.default_image.medium_url} alt='' />
                        <div className='body-text'>
                            <h1>{curPlant.common_name}</h1>
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
    )
}