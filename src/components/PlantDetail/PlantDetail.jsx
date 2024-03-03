import './PlantDetail.css'
import { useParams } from 'react-router-dom'

export default function PlantDetail() {
    let plantName = useParams();

    return (
        <div>
            <h1>PlantDetail</h1>
            <h3>{ plantName.plantId }</h3>
        </div>
    )
}