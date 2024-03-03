import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Filters from './Filters/Filters';
import PlantSearchResult from './PlantSearchResult/PlantSearchResult';
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props);

	const [plantList, setPlantList] = useState(['Plant A', 'Plant B', 'Plant C']);
	useEffect(() => {

		console.log("plant List Changed!", plantList);
	}, [plantList]);
	return (
		<>
			<h2>Home Page</h2>
			<Filters setPlantList={setPlantList} />
			 <PlantSearchResult plantList={plantList} />
			<ul>
				{/* {plantList.map((p, idx) => (
					<li>
						<Link to={`/${p}`}>{p}</Link>
					</li>
				))} */}
			</ul>
		</>
	);
};

export default Home;
