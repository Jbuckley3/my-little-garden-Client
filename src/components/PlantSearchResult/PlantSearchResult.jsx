import { useEffect } from "react";
export default function PlantSearchResult(plantList) {

useEffect(()=>{


},[plantList])

    return (

        <div>
            <h1>Search result</h1>
            {plantList.length && plantList.map((plant) => {
        
                <ul>
                    <li>{plant.common_name}</li>
                    <li>{plant.id}</li>
                </ul>;
            })}
        </div>
    );

}