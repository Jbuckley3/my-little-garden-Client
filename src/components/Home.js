import { Link } from "react-router-dom"
import { useState } from "react"
import Filters from './Filters/Filters'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const [plantList, setPlantList] = useState(['Plant A', 'Plant B', 'Plant C'])

	return (
		<>
			<h2>Home Page</h2>
			<Filters setPlantList={setPlantList} />
			<ul>
				{plantList.map((p, idx) => (
					<li>
						<Link to={`/${p}`}>{p}</Link>
					</li>
				))}
            </ul>
		</>
	)
}

export default Home
