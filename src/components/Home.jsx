import { useState } from "react";
import Filters from './Filters/Filters';
import PlantSearchResult from './PlantSearchResult/PlantSearchResult';
const Home = (props) => {
	// const { msgAlert, user } = props
	// console.log('props in home', props);

	const [plantList, setPlantList] = useState([]);

	return (
		<>
			<Filters setPlantList={setPlantList} />
			<PlantSearchResult plantList={plantList} />
		</>
	);
};

export default Home;
